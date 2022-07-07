import React, { useCallback } from 'react';
import { NetworkStatus } from '@apollo/client';
import {
  useUserWaitlistQuery,
  LoadingDots,
  useUnenrollFromWaitlistMutation
} from '@thoughtindustries/content';
import useLearnerAccess from '../use-context';

const LoadWaitlist = (): JSX.Element => {
  const {
    data,
    loading,
    error,
    refetch: refetchWaitlist,
    networkStatus
  } = useUserWaitlistQuery({
    variables: {},
    fetchPolicy: 'network-only',
    ssr: false,
    notifyOnNetworkStatusChange: true
  });
  const [unenrollFromWaitlistMutation] = useUnenrollFromWaitlistMutation();
  const { refetchContentGroups, resetActiveTab } = useLearnerAccess();
  const handleUnenroll = useCallback(
    async id => {
      await unenrollFromWaitlistMutation({ variables: { id } });
      await refetchContentGroups();
      const { data: refetchData } = await refetchWaitlist();
      if (refetchData && !refetchData.UserWaitlist?.length) {
        resetActiveTab();
      }
    },
    [refetchContentGroups, refetchWaitlist, resetActiveTab]
  );
  const isRefetching = networkStatus === NetworkStatus.refetch;
  console.log('data from child', data);
  if (loading || isRefetching) return <LoadingDots />;
  if (error) return <>{error.message}</>;
  if (!data || !data.UserWaitlist) return <></>;
  return (
    <>
      {data.UserWaitlist.map(item => {
        return (
          <div
            key={item.id}
            className="border-solid p-4 text-black-light border-gray-light px-4 py-[0.5rem] odd:bg-white-mid border-b last:border-b-0"
          >
            <div className="my-0 mx-auto max-w-full w-full">
              <div className="grid items-center grid-cols-12 gap-4">
                <div className="col-span-4">
                  <button className="btn btn--link btn--inherit-font dashboard-access-list-item-expander">
                    <span className="dashboard-access-list-item-expander__title text-gray-mid">
                      {item.title && item.title}
                    </span>
                  </button>
                </div>

                <div className="col-span-2"></div>

                <div className="col-span-3 text-gray-mid">
                  <strong>{item.contentTypeLabel && item.contentTypeLabel}</strong>
                </div>

                <div className="col-start-11 col-span-2 text-right">
                  <button
                    onClick={() => handleUnenroll(item.id)}
                    className="bg-active-blue text-accent-contrast bg-accent rounded-sm cursor-pointer inline-block font-normal text-xs m-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-active-blue font-sans transition duration-200 leading-5"
                  >
                    Unenroll from Waitlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default LoadWaitlist;
