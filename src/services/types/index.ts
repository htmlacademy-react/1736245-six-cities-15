import { store } from '../../store';
import { TCityName } from '../utils';
import { TOffer } from './offers';

// for store
export type TAppDispatch = typeof store.dispatch;
export type TState = {
    city: TCityName;
    offers: TOffer[];
}
