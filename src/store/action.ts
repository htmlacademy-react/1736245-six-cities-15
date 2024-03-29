import {createAction} from '@reduxjs/toolkit';
import { TCityName } from '../services/utils';
import { TOffer } from '../services/types/offers';

export const changeCity = createAction<{city:TCityName}>('city/change');

export const getOffersList = createAction<TOffer[]>('offers/full');
