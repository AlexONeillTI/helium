import React, { useState } from 'react';
import { LearnerAccessProps } from '../types';
import { UploadIcon, RepeatIcon } from '../Assets/Icons';
import {
  useUserCertificatesQuery,
  useCreateCertificateFromUploadMutation,
  useUserCertificateFieldsQuery,
  LoadingDots
} from '@thoughtindustries/content';

const LoadCertificates = ({
  query,
  displayExpiredCertificateInformation
}: LearnerAccessProps): JSX.Element => {
  const { data, loading, error }: any = useUserCertificatesQuery({
    variables: {
      query: query,
      includeExpiredCertificates: displayExpiredCertificateInformation
    }
  });
  const { data: data2 }: any = useUserCertificateFieldsQuery({
    variables: {}
  });

  const [showForm, setShowForm] = useState<boolean>(false);
  const [showFileImage, setShowFileImage] = useState<boolean>(false);
  const [imageFromUpload, setImageFromUpload] = useState<string | ArrayBuffer | null>('');

  const handleFileChange = (e: any) => {
    const files = e.target.files[0];
    const reader = new FileReader();

    setShowFileImage(true);

    if (files) reader.readAsDataURL(files);
    reader.onload = () => {
      setImageFromUpload(reader.result);
      console.log('image data', reader.result);
    };
  };

  const UploadFormUi = (item: any) => {
    const [createCertificateFromUploadMutation] = useCreateCertificateFromUploadMutation({
      variables: {
        asset: 'item.contentItem.asset,',
        certificateUploadFields: []
      }
    });
    return (
      <div
        key={item.id}
        className="border-solid p-4 text-black-light border-gray-light border-b last:border-b-0"
      >
        <form className="">
          <p className="font-normal mb-4 leading-[1.45rem]">
            {showFileImage ? (
              ''
            ) : (
              <span id="i18n-323">Upload a third-party certificate. Please provide details.</span>
            )}
          </p>
          <div className="flex justify-evenly">
            <div className="w-full">
              <div className="row">
                <div className="float-left px-4 relative">
                  <div className="ember-view input__container">
                    {!showFileImage ? (
                      <input
                        className="border-none btn btn--expand btn--bare rounded-sm text-xs box-border cursor-pointer block h-10 mx-0 mt-0 mb-4 py-1 px-4 w-full"
                        type="file"
                        name="file"
                        aria-label="file"
                        onChange={e => {
                          handleFileChange(e);
                        }}
                      />
                    ) : (
                      <>
                        <img
                          className="ember-view"
                          src={imageFromUpload?.toString()}
                          alt="External Certificate"
                        />
                        <button
                          onClick={() => setShowFileImage(false)}
                          className="flex items-center justify-end h-auto border-[#405667] text-[#405667] text-right bg-none rounded-none border-solid border-t-4 clear-both font-bold p-0 shadow-none w-full"
                        >
                          Remove Image
                          <RepeatIcon />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col text-base py-3 px-4 text-gray-mid">
              <div className="row">
                <div className="float-left px-4 relative w-full">
                  <div className="ember-view">
                    <label>Certificate Grant Date</label>
                    <div className="ember-view input__wrapper input__wrapper--clear">
                      <input
                        className="focus:outline-none h-10 mb-4 text-base py-2 px-4 w-full bg-white rounded-none border-solid border box-border block mx-0 mt-0 p-2 text-black cursor-pointer"
                        type="text"
                        onBlur={e => (e.target.type = 'text')}
                        onFocus={e => (e.target.type = 'date')}
                      />
                    </div>
                  </div>
                  <div className="ember-view">
                    <label>Certificate Expiration</label>

                    <div className="mb-4">
                      <input
                        className="focus:outline-none h-10 mb-4 text-base py-2 px-4 w-full bg-white rounded-none border-solid border box-border block mx-0 mt-0 p-2 text-black cursor-pointer"
                        type="text"
                        onBlur={e => (e.target.type = 'text')}
                        onFocus={e => (e.target.type = 'date')}
                      />
                    </div>
                  </div>
                  <div className="ember-view">
                    <label>
                      <span className="ember-view">
                        <em>CEU&apos;s</em>
                      </span>
                    </label>
                    <div className="ember-view">
                      <div className="ember-view legacy-label">
                        <label className="form__label">
                          <div className="form__label__container"></div>
                          <div className="form__input__container">
                            <input
                              className="focus:outline-none h-10 mb-4 text-base py-2 px-4 w-full bg-white rounded-none border-solid border box-border block mx-0 mt-0 p-2 text-black"
                              placeholder="0"
                              type="number"
                              min="0"
                              max="Infinity"
                            />
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end px-4">
                <div className="flex">
                  <button
                    onClick={() => {
                      setShowForm(!showForm);
                      setShowFileImage(false);
                    }}
                    data-ember-action="28579"
                    className="bg-white text-xs box-border cursor-pointer block h-10 mx-0 mt-0 mb-4 py-1 px-4 text-black w-full"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => createCertificateFromUploadMutation()}
                    className="bg-active-blue rounded-sm text-xs box-border cursor-pointer block h-10 mx-0 mt-0 mb-4 py-1 px-4 text-white w-full"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  };
  const switchUploadUI = () => {
    setShowForm(prev => !prev);
  };
  const CertificateUi = () => {
    return (
      <div className="my-0 mx-auto max-w-full w-full">
        <div className="px-4">
          <button
            onClick={switchUploadUI}
            className="rounded-sm cursor-pointer inline-block font-normal text-sm mx-0 mt-0 mb-4 py-2 px-5 relative text-center no-underline bg-grey-light duration-200 transition ease-in-out bg-active-blue border-active-blue text-white leading-5"
            data-ember-action="23973"
          >
            <UploadIcon />
            <span style={{ marginLeft: '1rem' }}>Upload Third-Party Certificate</span>
          </button>
        </div>
      </div>
    );
  };

  console.log('data from child', data);
  if (error) return error;
  return (
    <>
      {loading ? (
        <LoadingDots />
      ) : showForm ? (
        <UploadFormUi />
      ) : (
        data.CurrentUserCertificates.map(() => {
          return (
            <div className="border-solid text-base py-4 px-4 text-gray-400 border-gray-light">
              <CertificateUi />
            </div>
          );
        })
      )}
    </>
  );
};
export default LoadCertificates;
