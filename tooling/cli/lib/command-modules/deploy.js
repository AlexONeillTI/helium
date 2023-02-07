const childProcess = require('child_process');
const path = require('path');
const { promptQuestions } = require('../helpers/prompts');
const { DEPLOYMENT_LOG_FETCH_QUESTION, DEPLOYMENT_LOG_FETCH_MORE_QUESTION } = require('../prompts');

exports.command = 'deploy <instance> [-k]';
exports.describe = 'Compile and deploy a specified instance';

exports.builder = cmd => {
  cmd
    .positional('i', {
      alias: 'instance',
      type: 'string',
      describe: 'Nickname of instance to deploy'
    })
    .option('k', {
      alias: 'insecure',
      type: 'boolean',
      describe: 'Accept untrusted SSL certificates'
    });
};

exports.handler = function (argv) {
  const { fork } = childProcess;
  const env = {
    ...process.env,
    INSTANCE_NAME: argv.instance,
    NODE_TLS_REJECT_UNAUTHORIZED: argv.insecure ? '0' : '1'
  };

  // Process for running deployment - 1-way IPC from child to parent
  const deployScriptPath = path.resolve(__dirname, './../deploy.js');
  const deployProcess = fork(deployScriptPath, undefined, { env });

  /**
   * It expects message from deploy process when deployment job returns 'FAILURE'.
   * The message body should include jobId and TI instance object.
   * In the message handler:
   * - prompt user question to fetch deployment job log
   * - manually disconnect from deploy process
   * - if user answers 'Yes', fork new process to fetch deployment job and forward
   * message to trigger fetch
   */
  deployProcess.on('message', async message => {
    const fetchLogsAnswers = await promptQuestions([DEPLOYMENT_LOG_FETCH_QUESTION]);
    deployProcess.disconnect();
    if (fetchLogsAnswers.shouldFetchLogs) {
      // Process for deployment log - 2-way IPC between child and parent
      const deployLogScriptPath = path.resolve(__dirname, './../deployment-log.js');
      const deployLogProcess = fork(deployLogScriptPath, undefined, { env });

      deployLogProcess.send(message);

      /**
       * It expects message from deploy log process when fetching batch of deployment job log completes.
       * The message body should include jobId and token to fetch next batch of log.
       * In the message handler:
       * - prompt user question to fetch more deployment job log
       * - if user answers 'No', manually disconnect from deploy log process
       * - if user answers 'Yes', forward message to deploy log process to fetch next batch of log
       */
      deployLogProcess.on('message', async msg => {
        const fetchMoreLogsAnswers = await promptQuestions([DEPLOYMENT_LOG_FETCH_MORE_QUESTION]);
        if (fetchMoreLogsAnswers.shouldFetchMoreLogs) {
          deployLogProcess.send(msg);
        } else {
          deployLogProcess.disconnect();
        }
      });

      deployLogProcess.on('exit', code => {
        console.log(`deployLogProcess process exited with code ${code.toString()}`);
      });
    }
  });

  deployProcess.on('exit', code =>
    console.log(`deployProcess process exited with code ${code.toString()}`)
  );
};
