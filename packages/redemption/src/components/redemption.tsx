import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Registration from './registration';
import { codeList, isEmpty } from './helper';
import Banner from './banner';
import { useRedemptionCodesMutation } from '../graphql';

const Redemption = (currentUser: CurrentUser): JSX.Element => {
  const styles = {
    container: 'mx-4 md:mx-40 text-center self-center',
    prompt: 'flex justify-center mb-8 text-sm text-gray-500',
    termsContainer: 'flex flex-col md:flex-row text-sm text-gray-500 justify-between',
    buttonStyle:
      'text-white bg-indigo-700 hover:bg-indigo-600 inline-block font-normal text-sm text-center no-underline py-2 w-full md:w-1/4 rounded-md',
    checkboxContainer: 'flex flex-row items-center mb-4',
    checkbox: 'mr-2',
    addCodeStyle: 'flex justify-left text-indigo-700 text-sm',
    terms: 'text-gray-700'
  };

  const { t } = useTranslation();
  const [count, setCount] = useState(1);
  const [redemptionCodesMutation, { loading }] = useRedemptionCodesMutation();
  const [code, setCode] = useState('');
  const [valid, setValid] = useState<boolean | null | undefined>(null);

  const handleInput = (value: string) => {
    setCode(value);
  };

  const handleSubmit = () => {
    redemptionCodesMutation({ variables: { code: code } })
      .then(response => setValid(response.data?.RedemptionCodes?.valid))
      .catch(error => console.log('Redemption Request Error: ', error));
  };

  return (
    <form className={styles.container}>
      {!isEmpty(currentUser) ? (
        <>
          <h5 className={styles.prompt}>{t('redemption.signed-in-prompt')}</h5>
          <Banner valid={valid} />
          {codeList({
            num: count,
            handleInput: handleInput,
            handleSubmit: handleSubmit,
            valid: valid,
            validating: loading
          })}
          <button className={styles.addCodeStyle} type="button" onClick={() => setCount(count + 1)}>
            {t('redemption.add-code')}
          </button>
          <div className="w-full border-t border-gray-200 my-4"></div>
          <div className={styles.termsContainer}>
            <div className={styles.checkboxContainer}>
              <input className={styles.checkbox} type="checkbox" />
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <p>{`${t('common.agree-terms')}\u00A0`}</p>
                <button className={styles.terms} type="button">
                  {t('common.terms-and-conditions')}
                </button>
              </div>
            </div>
            <button className={styles.buttonStyle} type="button">
              {t('redemption.register')}
            </button>
          </div>
        </>
      ) : (
        <Registration />
      )}
    </form>
  );
};

Redemption.displayName = 'Redemption';
Redemption.Registration = Registration;
export default Redemption;
