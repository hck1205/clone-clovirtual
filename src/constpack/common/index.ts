export enum PricingOption {
  PAID = 0,
  FREE = 1,
  VIEW_ONLY = 2,
}

export enum SortingOption {
  NAME = 0,
  HIGHER_PRICE = 1,
  LOWER_PRICE = 2,
}

export const PRICING_TEXT = ['Paid', 'Free', 'View only'];
export const SORTING_TEXT = ['Item Name', 'Higher Price', 'Lower Price'];

export const logoURL =
  'https://storagefiles.clo-set.com/public/connect/common/connect-bi-primary-high.png';

export const ITEMS_PER_PAGE = 15;

export const MIN_VALUE = 0;
export const MAX_VALUE = 999;
export const PRICING_RANGES = [MIN_VALUE, MAX_VALUE];
