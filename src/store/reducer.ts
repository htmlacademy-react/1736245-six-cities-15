import { createReducer } from '@reduxjs/toolkit';
import { CITIES, SortingNames } from '../services/constants';
import { changeCity, getOffersList, sortOffers, setError, changeOffersFetchStatus } from './action';
import { Offers } from '../mocks/offers';
import { TState } from '../services/types';
import { AuthorizationStatus } from '../services/constants';

const initialState: TState = {
  city: CITIES[0],
  offers: Offers,
  activeSorting: SortingNames.Popular,
  error: null,
  authStatus: AuthorizationStatus.NoAuth,
  areOffersFetched: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(getOffersList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(sortOffers, (state, action) => {
      state.activeSorting = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(changeOffersFetchStatus, (state, action) => {
      state.areOffersFetched = action.payload;
    });
});
