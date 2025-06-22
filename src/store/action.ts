import { createAction } from '@reduxjs/toolkit';
import { CityName, SortingType } from '../const';
import { OfferPreviewType } from '../types/offer-preview';

const changeCity = createAction<CityName>('changeCity');
const fillOffersList = createAction<OfferPreviewType[]>('fillOffersList');
const setSortOption = createAction<SortingType>('sort');

export {changeCity, fillOffersList, setSortOption};
