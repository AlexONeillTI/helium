jest.mock('../../cli/lib/helpers/translations', () => ({
  fetchTranslations: jest.fn(),
  writeTranslationFile: jest.fn()
}));

const { mainFunction } = require('../../cli/lib/update-translations.js');
const { fetchTranslations, writeTranslationFile } = require('../../cli/lib/helpers/translations');
const { instanceTranslations } = require('./locales/instance-translations');

describe('updateTranslations', () => {
  it('should update translations successfully', async () => {
    const writeFileMock = writeTranslationFile;

    //mock the response of fetchTranslations
    fetchTranslations.mockResolvedValue(instanceTranslations);

    //mock the exit to stop the process.exit from terminating the test
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    console.log('____dirname: ', __dirname);
    await mainFunction(__dirname);
    expect(mockExit).toHaveBeenCalledWith(0);

    expect(writeFileMock).toHaveBeenCalledWith(__dirname, instanceTranslations);
  });
});
