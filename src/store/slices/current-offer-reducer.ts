import { createSlice } from '@reduxjs/toolkit';
import { TOffer } from '../../services/types/offers';
import { fetchCurrentOffer, fetchNearByOffers, fetchReviews } from '../thunks/offers';
import { TReview } from '../../services/types/reviews';

type TState = {
    currentOffer: TOffer | null;
    nearByOffers: TOffer[] | [];
    isOfferLoading: boolean;
    isNearByLoading: boolean;
    areReviewsLoading: boolean;
    reviews: TReview[] | [];
}


const initialState: TState = {
  currentOffer: null,
  isOfferLoading: false,
  isNearByLoading: false,
  areReviewsLoading: false,
  nearByOffers: [],
  reviews: [],
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
      })
      .addCase(fetchCurrentOffer.rejected, (state, action) => {
        state.error = action.error.message;
        state.isOfferLoading = false;
      })
      .addCase(fetchNearByOffers.pending, (state) => {
        state.isNearByLoading = true;
      })
      .addCase(fetchNearByOffers.fulfilled, (state, action) => {
        state.nearByOffers = action.payload;
        state.isNearByLoading = false;
      })
      .addCase(fetchNearByOffers.rejected, (state, action) => {
        state.error = action.error.message;
        state.isNearByLoading = false;
      })
      .addCase(fetchReviews.pending, (state) => {
        state.areReviewsLoading = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.areReviewsLoading = false;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.error = action.error.message;
        state.areReviewsLoading = false;
      });
  },
});

// Export reducer
export default currentOfferSlice.reducer;
