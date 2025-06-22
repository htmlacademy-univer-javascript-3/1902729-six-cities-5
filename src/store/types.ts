import { OfferType } from '../types';
import { CITIES } from '../const';
import { store } from './index';

export type State = {
  city: typeof CITIES[number];
  offers: OfferType[];
  isOffersLoading: boolean;
}

export type Dispatch = typeof store.dispatch;
