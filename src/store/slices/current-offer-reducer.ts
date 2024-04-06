import { createSlice } from '@reduxjs/toolkit';
import { TOffer } from '../../services/types/offers';
import { fetchCurrentOffer, fetchNearByOffers, toggleFavorite } from '../thunks/offers';

type TState = {
    currentOffer: TOffer | null;
    nearByOffers: TOffer[] | [];
    isOfferLoading: boolean;
    isNearByLoading: boolean;
    isOfferFetched: boolean;
    isNearByFetched: boolean;
}


const initialState: TState = {
  currentOffer: null,
  isOfferLoading: false,
  isNearByLoading: false,
  nearByOffers: [],
  isOfferFetched: false,
  isNearByFetched: false,
};

export const currentOfferSlice = createSlice({
  name: 'currentOffer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentOffer.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchCurrentOffer.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isOfferLoading = false;
        state.isOfferFetched = true;
      })
      .addCase(fetchCurrentOffer.rejected, (state) => {
        // state.error = action.error.message;
        state.isOfferLoading = false;
      })
      .addCase(fetchNearByOffers.pending, (state) => {
        state.isNearByLoading = true;
      })
      .addCase(fetchNearByOffers.fulfilled, (state, action) => {
        state.nearByOffers = action.payload;
        state.isNearByLoading = false;
        state.isNearByFetched = true;
      })
      .addCase(fetchNearByOffers.rejected, (state) => {
        // state.error = action.error.message;
        state.isNearByLoading = false;
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        if(state.currentOffer !== null) {
          state.currentOffer.isFavorite = action.payload.isFavorite;
        }
      });
  },
});

// Export reducer
export default currentOfferSlice.reducer;
