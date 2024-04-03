import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import { Endpoints } from '../../services/constants';
import { TOffer } from '../../services/types/offers';
import { TAppDispatch, TState } from '../../services/types';
import { changeOffersFetchStatus } from '../action';

export const fetchOffers = createAsyncThunk<TOffer[], void, {
    dispatch: TAppDispatch;
    state: TState;
    extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(changeOffersFetchStatus(true));
    const response = await api.get<TOffer[]>(Endpoints.Offers);
    const data = response.data;
    dispatch(changeOffersFetchStatus(false));
    return data;
  }
);
