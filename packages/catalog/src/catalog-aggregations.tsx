import React, { ReactNode, useState } from 'react';
import { useCatalog } from './core';
import clsx from 'clsx';
import { ArrowDownIcon, ArrowRightIcon } from './icons';
import { useLanguagesQueryQuery } from '@thoughtindustries/content';

type AggregationBucketProps = {
  href: string;
  value: string;
  count?: number;
};

type AggregationProps = {
  index: number;
  label: string;
  defaultIsExpanded: boolean;
  aggregationBuckets: ReactNode;
};

const AggregationBucket = ({ href, value, count }: AggregationBucketProps): JSX.Element => (
  <li className="text-blue-600">
    <a href={href} className="flex justify-between space-y-2 my-4 hover:bg-black">
      <div className="text-sm pt-3 font-semibold ml-0">
        <a href={href}>{value}</a>
      </div>
      <div className="mr-0">
        {count && (
          <button className="px-5 py-1 bg-gray-300 text-sm font-medium rounded-full">
            {count}
          </button>
        )}
      </div>
    </a>
  </li>
);

const Aggregation = ({
  index,
  label,
  defaultIsExpanded,
  aggregationBuckets
}: AggregationProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(defaultIsExpanded);
  const handleToggle = () => {
    setIsExpanded(prevIsExpanded => !prevIsExpanded);
  };
  const wrapperClassnames = isExpanded ? 'border-b mb-4 bg-gray-100' : '';
  const buttonLinkClassnames =
    'w-full leading-normal text-left transition-colors ease-in-out duration-200 bg-none text-accent flex items-center gap-4';
  const listClassnames = !isExpanded ? 'hidden' : '';
  const ariaId = `catalog-aggregation-dropdown-${index}`;
  return (
    <div className="bg-white px-5 py-3 rounded">
      <div className={clsx(['bg-slate-500 py-4 px-3 rounded'], wrapperClassnames)}>
        <button
          className={`${buttonLinkClassnames}`}
          onClick={handleToggle}
          aria-expanded={isExpanded}
          aria-labelledby={ariaId}
        >
          <span className="text-xl inline-block leading-4 text-center w-5 h-5">
            {isExpanded && <ArrowDownIcon />}
            {!isExpanded && <ArrowRightIcon />}
          </span>
          <span className="font-semibold">{label}</span>
        </button>
        <ul
          aria-hidden={!isExpanded}
          id={ariaId}
          className={clsx(['pl-6 text-sm'], listClassnames)}
        >
          {aggregationBuckets}
        </ul>
      </div>
    </div>
  );
};

const CatalogAggregations = (): JSX.Element => {
  const { params, urlManager } = useCatalog();
  const { aggregations, aggregationFilters, isCurated, token, tokenLabel } = params;
  const { data } = useLanguagesQueryQuery();

  // derived value
  const firstAggregationFilterLabel = aggregationFilters.length
    ? aggregationFilters[0].label
    : undefined;
  const languages = data ? data.Languages : [];

  const contents = aggregations.map(({ label = '', buckets = [] }, index) => {
    const isAggregationLabel = label === firstAggregationFilterLabel;
    const isTokenLabel = tokenLabel && label === tokenLabel;
    const isCurrentLabel = isAggregationLabel || isTokenLabel;
    /**
     * never expand first aggregation when using curated categories.
     * otherwise, never expand the first aggregation when using token search.
     */
    const shouldExpandFirst = !isCurated && !token;
    const isExpanded = isCurrentLabel || (shouldExpandFirst && index === 0);

    const aggregationBuckets = buckets.map(({ value = '', count, query }, bucketIndex) => {
      const filter = { label, value };
      const isLanguageLabel = query?.includes('language');
      const languageLabel = languages.find(({ code }) => code === value)?.label || value;
      const displayLabel = isLanguageLabel ? languageLabel : value;
      const props = {
        href: urlManager.composeURLForAddAggregationFilter(filter),
        value: displayLabel,
        count
      };
      return <AggregationBucket key={`catalog-aggregation-bucket-${bucketIndex}`} {...props} />;
    });

    const props = {
      index,
      defaultIsExpanded: isExpanded,
      label,
      aggregationBuckets
    };
    return <Aggregation key={`catalog-aggregation-${index}`} {...props} />;
  });

  return <>{contents}</>;
};

CatalogAggregations.displayName = 'CatalogAggregations';

export default CatalogAggregations;
