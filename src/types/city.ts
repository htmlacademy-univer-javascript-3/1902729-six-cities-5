import { CityName } from '../const.ts';
import { LocationType } from './location.ts';

type CityType = {
  location: LocationType;
  name: CityName;
};

export type {CityType};
