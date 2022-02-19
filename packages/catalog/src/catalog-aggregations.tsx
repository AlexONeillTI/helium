import React, { memo, ReactNode, useState } from 'react';
import { useCatalogAggregations, useCatalogURLManager } from './core';
import clsx from 'clsx';
import { ArrowDownIcon, ArrowRightIcon } from './icons';

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

const AggregationBucket = memo(
  ({ href, value, count }: AggregationBucketProps): JSX.Element => (
    <li>
      <a
        href={href}
        className="inline-block leading-normal py-1.5 px-4 text-link hover:text-link-hover"
      >
        {value}
        {count && <span className="text-xs text-gray-700 pl-1">({count})</span>}
      </a>
    </li>
  )
);
AggregationBucket.displayName = 'AggregationBucket';

const Aggregation = memo(
  ({ index, label, defaultIsExpanded, aggregationBuckets }: AggregationProps): JSX.Element => {
    const [isExpanded, setIsExpanded] = useState(defaultIsExpanded);
    const handleToggle = () => {
      setIsExpanded(prevIsExpanded => !prevIsExpanded);
    };
    const wrapperClassnames = isExpanded ? 'border-b mb-4 bg-gray-100' : '';
    const buttonLinkClassnames =
      'w-full leading-normal text-left transition-colors ease-in-out duration-200 bg-none text-accent hover:text-accent-hover flex items-center gap-4';
    const listClassnames = !isExpanded ? 'hidden' : '';
    const ariaId = `catalog-aggregation-dropdown-${index}`;
    return (
      <div className={clsx(['border-t border-solid border-gray-400 py-3 px-2'], wrapperClassnames)}>
        <button
          className={buttonLinkClassnames}
          onClick={handleToggle}
          aria-expanded={isExpanded}
          aria-labelledby={ariaId}
        >
          <span className="text-xl inline-block leading-4 text-center">
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
    );
  }
);
Aggregation.displayName = 'Aggregation';

const CatalogAggregations = (): JSX.Element => {
  const { aggregations, aggregationFilters, isCurated, token, tokenLabel } =
    useCatalogAggregations();
  const urlManager = useCatalogURLManager();

  // derived value
  const firstAggregationFilterLabel = aggregationFilters.length
    ? aggregationFilters[0].label
    : undefined;

  const contents = aggregations.reduce((acc, { label = '', buckets = [] }, index) => {
    const isAggregationLabel = label === firstAggregationFilterLabel;
    const isTokenLabel = tokenLabel && label === tokenLabel;
    const isCurrentLabel = isAggregationLabel || isTokenLabel;
    /**
     * never expand first aggregation when using curated categories.
     * otherwise, never expand the first aggregation when using token search.
     */
    const shouldExpandFirst = !isCurated && !token;
    const isExpanded = isCurrentLabel || (shouldExpandFirst && index === 0);

    const aggregationBuckets = buckets.reduce((bucketsAcc, { value = '', count }, bucketIndex) => {
      const filter = { label, value };
      const props = {
        key: `catalog-aggregation-bucket-${bucketIndex}`,
        href: urlManager.composeURLForAddAggregationFilter(filter, isCurated),
        value,
        count
      };
      bucketsAcc.push(<AggregationBucket {...props} />);
      return bucketsAcc;
    }, [] as JSX.Element[]);

    const props = {
      key: `catalog-aggregation-${index}`,
      index,
      defaultIsExpanded: isExpanded,
      label,
      aggregationBuckets
    };
    acc.push(<Aggregation {...props} />);
    return acc;
  }, [] as JSX.Element[]);

  return <>{contents}</>;
};

CatalogAggregations.displayName = 'CatalogAggregations';

export default CatalogAggregations;
