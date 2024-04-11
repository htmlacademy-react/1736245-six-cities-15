import { createSlice } from '@reduxjs/toolkit';
import { fetchReviews, sendReview } from '../thunks/offers';
import { TReview } from '../../services/types/reviews';

type TState = {
    areReviewsLoading: boolean;
    areReviewsFetched: boolean;
    reviews: TReview[] | [];
    isReviewSent: boolean;
    shouldFormBeDisabled: boolean;
    hasError: boolean;
}

const initialState: TState = {
  areReviewsLoading: false,
  reviews: [],
  areReviewsFetched: false,
  isReviewSent: false,
  shouldFormBeDisabled: false,
  hasError: false,
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.areReviewsLoading = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.areReviewsLoading = false;
        state.areReviewsFetched = true;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.areReviewsLoading = false;
      })
      .addCase(sendReview.pending, (state) => {
        state.shouldFormBeDisabled = true;
        state.hasError = false;
        state.isReviewSent = false;
      })
      .addCase(sendReview.fulfilled, (state) => {
        state.isReviewSent = true;
        state.shouldFormBeDisabled = false;
        state.hasError = false;
      })
      .addCase(sendReview.rejected, (state) => {
        state.isReviewSent = false;
        state.shouldFormBeDisabled = false;
        state.hasError = true;
      });
  },
});

export default reviewsSlice.reducer;
