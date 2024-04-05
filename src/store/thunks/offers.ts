import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import { Endpoints } from '../../services/constants';
import { TOffer } from '../../services/types/offers';
import { TReview } from '../../services/types/reviews';

export const fetchOffers = createAsyncThunk<TOffer[], void, {
    extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, { extra: api }) => {
    const response = await api.get<TOffer[]>(Endpoints.Offers);
    return response.data;
  }
);

// get current Offer

export const fetchCurrentOffer = createAsyncThunk<TOffer, string, {
  extra: AxiosInstance;
}>(
  'fetchCurrentOffer',
  async (id, { extra: api }) => {
    const response = await api.get<TOffer>(`${Endpoints.Offers}/${id}`);
    return response.data;
  }
);

// get nearByOffers
export const fetchNearByOffers = createAsyncThunk<TOffer[], string, {
  extra: AxiosInstance;
}
>(
  'fetchNearByOffers',
  async (id, { extra: api }) => {
    const response = await api.get<TOffer[]>(`${Endpoints.Offers}/${id}/nearby`);
    return response.data;
  }
);

// get all reviews
export const fetchReviews = createAsyncThunk<TReview[], string, {
  extra: AxiosInstance;
}
>(
  'fetchReviews',
  async (id, { extra: api }) => {
    const response = await api.get<TReview[]>(`${Endpoints.Comments}/${id}`);
    return response.data;
  }
);

// send review
// export const fetchReviewAction = createAsyncThunk<void, { id: string; reviewValues: TReviewForm }, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }
// >(
//   'data/fetchReview',
//   async ({ id, reviewValues }, { dispatch, extra: api }) => {
//     const data = await api.post(`${APIRoute.Comments}/${id}`, reviewValues);
//     if (data.status === 201) {
//       dispatch(fetchReviewsListAction(id));
//     }
//   }
// );

// get favorites
// export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }
// >(
//   'data/fetchFavorites',
//   async (_arg, { dispatch, extra: api }) => {
//     dispatch(setDataLoadingStatus(true));
//     const { data } = await api.get<TOffer[]>(APIRoute.Favorite);
//     dispatch(setDataLoadingStatus(false));
//     dispatch(getFavorites(data));
//   }
// );

// add/delete to favorites
// export const fetchToggleFavorite = createAsyncThunk<void, { id: string; isFavorite: boolean }, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }
// >(
//   'data/fetchToggleFavorite',
//   async ({ id, isFavorite }, { dispatch, extra: api }) => {
//     const data = await api.post(`${APIRoute.Favorite}/${id}/${Number(isFavorite)}`);
//     if (data.status === 200) {
//       dispatch(changeFavoriteStatusInCurrentOffer(false));
//     }
//     if (data.status === 201) {
//       dispatch(changeFavoriteStatusInCurrentOffer(true));
//     }
//     dispatch(fetchFavoritesAction());
//     dispatch(fetchOfferListAction());
//   }
// );

