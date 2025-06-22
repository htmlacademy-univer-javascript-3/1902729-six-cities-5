import { CityType } from './city';
import { LocationType } from './location';

type OfferPreviewType = {
  id: string;
  title: string;
  type: string;
  price:number;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type {OfferPreviewType};
