import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillOffersList, setSortOption } from './action';
import { CityName, SortingType } from '../const';
import { OfferPreviewType } from '../types/offer-preview';

type StateType = {
  city: CityName;
  offers: OfferPreviewType[];
  sortOption: SortingType;
};

const initialState: StateType = {
  city: CityName.Paris,
  offers: [],
  sortOption: SortingType.Popular,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffersList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload;
    });
});

export {reducer};
