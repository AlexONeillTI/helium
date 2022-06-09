import { CART_ID } from './constants';
import {
  AddPurchaseableItemPayload,
  Cart,
  CartItem,
  CartItemInterval,
  EcommItemType,
  OtherPurchaseableItem,
  SeatTier,
  VariationLabel
} from './types';
import { totalDueNow } from 'couponable';

export const parseCartCookie = (cookie?: string): Cart => {
  const defaultCart: Cart = { id: CART_ID, items: [] };
  if (!cookie) {
    return defaultCart;
  }

  try {
    const base64Url = cookie.split('.')[0];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const { cartItems: items = [] } = JSON.parse(window.atob(base64));
    return {
      ...defaultCart,
      items
    };
  } catch (e) {
    return defaultCart;
  }
};

export const serializeCart = (cart: Cart): string => {
  const clonedCart = {
    id: CART_ID,
    cartItems: [...cart.items]
  };
  return window.btoa(JSON.stringify(clonedCart));
};

const findPackagePrice = (
  seats: number,
  tiers: SeatTier[] | undefined = [],
  lastTierPriceInCents: number | undefined = 0
) => {
  const sortedTiers = tiers.sort((a, b) => a.seats - b.seats);
  const tier = sortedTiers.find((tier, i) => {
    const lowerThreshold = i === 0 ? 1 : sortedTiers[i - 1].seats + 1;
    const upperThreshold = i === sortedTiers.length + 1 ? Infinity : tier.seats;

    return seats >= lowerThreshold && seats <= upperThreshold;
  });

  const finalTierPriceInCents = tier?.priceInCents || lastTierPriceInCents;
  return finalTierPriceInCents * seats;
};

export const parsePurchaseableItem = ({
  purchasableType,
  purchasable,
  coupon,
  interval,
  quantity = 1
}: AddPurchaseableItemPayload): CartItem => {
  const { priceInCents, id, name, asset } = purchasable;
  const {
    clientSubscription,
    isBulkPurchase = false,
    seatTiers,
    lastTierPriceInCents,
    annualPriceInCents = 0,
    title,
    instructorAccessPriceInCents,
    suffixedTitle,
    selectedCourseIds = [],
    currentPriceInCents = 0
  } = purchasable as OtherPurchaseableItem;

  let cartItemPriceInCents = priceInCents || 0;

  if (!!clientSubscription || isBulkPurchase) {
    cartItemPriceInCents = findPackagePrice(quantity, seatTiers, lastTierPriceInCents) / quantity;
  } else if (interval === CartItemInterval.Year) {
    cartItemPriceInCents = annualPriceInCents;
  }

  if (coupon) {
    cartItemPriceInCents = totalDueNow({
      quantity: 1,
      priceInCents: cartItemPriceInCents,
      coupon
    });
  }

  const baseCartItem: CartItem = {
    purchasableType,
    purchasableId: id,
    title: title || name || '',
    asset: asset,
    interval,
    priceInCents: cartItemPriceInCents,
    couponCode: coupon?.code,
    instructorAccessPriceInCents,
    quantity,
    relatedProducts: [],
    relatedCourseGroups: [],
    isBulkPurchase
  };

  if (purchasableType === EcommItemType.PickableGroup) {
    return {
      ...baseCartItem,
      title: suffixedTitle || '',
      courses: [...selectedCourseIds],
      priceInCents: isBulkPurchase ? cartItemPriceInCents : currentPriceInCents
    };
  }

  return baseCartItem;
};

export const existingCartItemMatcher =
  ({ purchasableId, purchasableType }: CartItem) =>
  ({
    purchasableId: existingPurchasableId,
    purchasableType: existingPurchasableType
  }: CartItem) => {
    if (purchasableType === EcommItemType.Bundle) {
      // can only add one bundle to a cart at a time
      // it really doesn't make sense purchasing more than one bundle at a time,
      // plus supporting this would make checkout code much trickier than it already is.
      return existingPurchasableType === purchasableType;
    }

    // looking for same ID & Type
    return existingPurchasableId === purchasableId && existingPurchasableType === purchasableType;
  };

export const getCartItemTotalDueNow = ({
  quantity,
  variationLabel,
  priceInCents,
  instructorAccessPriceInCents,
  purchasableType
}: CartItem) => {
  const instructorAccessSelected = variationLabel === VariationLabel.WithInstructorAccess;
  const instructorAccessVariation = { priceInCents: instructorAccessPriceInCents };
  const variation = instructorAccessSelected ? { ...instructorAccessVariation } : undefined;
  const orderItem = {
    quantity,
    priceInCents,
    purchasableType,
    variation
  };

  return totalDueNow(orderItem);
};

export const getCartTotalDueNow = (items: CartItem[]) =>
  items.reduce((prev, item) => prev + getCartItemTotalDueNow(item), 0);
