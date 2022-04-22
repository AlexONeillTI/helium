import React from 'react';
import { LoadedComponentProps } from './types';
import { useArchivesQuery, LoadingDots } from '@thoughtindustries/content';

const LoadContentItems = ({ query, kind, sort }: LoadedComponentProps): JSX.Element => {
  const { data, loading, error }: any = useArchivesQuery({
    variables: {}
  });
  console.log('data from child', data);
  return (
    <>
      <div className="inline-block">
        <div className="top-2/4 left-1/2 mr-0 mb-0 -mt-5 -ml-16 absolute">
          {loading ? (
            <LoadingDots />
          ) : (
            <div className="text-center border-solid border-b text-base py-3 px-4 text-gray-400 border-gray-light"></div>
          )}
        </div>
      </div>
    </>
  );
};
export default LoadContentItems;
