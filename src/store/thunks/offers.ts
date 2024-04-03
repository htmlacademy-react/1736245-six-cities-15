import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import { Endpoints } from '../../services/constants';
import { TOffer } from '../../services/types/offers';
// import { TAppDispatch, TState } from '../../services/types';
// import { changeOffersFetchStatus } from '../action';

export const fetchOffers = createAsyncThunk<TOffer[], void, {
    extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, { extra: api }) => {
    const response = await api.get<TOffer[]>(Endpoints.Offers);
    return response.data;
  }
);


