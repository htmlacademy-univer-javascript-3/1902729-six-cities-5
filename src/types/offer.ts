import { OfferPreviewType } from './offer-preview';
import { UserType } from './user';

type OfferType = OfferPreviewType & {
  bedrooms: number;
  description: string;
  host: UserType;
  images: string[];
  maxAdults: number;
};

export type {OfferType};
