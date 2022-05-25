export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A valid absolute (starting with either a valid protocol or a leading www) or relative (with a leading slash) URL string */
  AbsoluteOrRelativeURL: string;
  /** Date scalar type */
  Date: string;
  /** Hex Color scalar type */
  HexColor: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A valid relative URL string with a leading slash (/) */
  RelativeURL: string;
  /** Slug scalar type */
  Slug: string;
  /** A valid absolute URL string starting with either a valid protocol or a leading www */
  URL: string;
};

export enum AlternativePricingType {
  Membership = 'membership'
}

export type Product = {
  __typename?: 'Product';
  alternativePricingRef?: Maybe<Scalars['Int']>;
  alternativePricingType?: Maybe<AlternativePricingType>;
  asset?: Maybe<Scalars['URL']>;
  id?: Maybe<Scalars['ID']>;
  language?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priceInCents?: Maybe<Scalars['Int']>;
  purchasable?: Maybe<Scalars['Boolean']>;
  relatedProducts?: Maybe<Array<Maybe<Product>>>;
  status?: Maybe<Status>;
  suggestedRetailPriceInCents?: Maybe<Scalars['Int']>;
};

export enum Status {
  Archived = 'archived',
  Authoring = 'authoring',
  Deleted = 'deleted',
  Draft = 'draft',
  LoginRestriction = 'loginRestriction',
  Pending = 'pending',
  Published = 'published'
}
