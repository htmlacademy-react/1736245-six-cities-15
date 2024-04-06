import { createSlice } from '@reduxjs/toolkit';
import { fetchReviews, sendReview } from '../thunks/offers';
import { TReview } from '../../services/types/reviews';

type TState = {
    areReviewsLoading: boolean;
    areReviewsFetched: boolean;
    reviews: TReview[] | [];
}


const initialState: TState = {
  areReviewsLoading: false,
  reviews: [],
  areReviewsFetched: false,
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
        // state.error = action.error.message;
        state.areReviewsLoading = false;
      })
      .addCase(sendReview.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  },
});

// Export reducer
export default reviewsSlice.reducer;
