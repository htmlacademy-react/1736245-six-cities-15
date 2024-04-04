import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
// import { TState, TAppDispatch } from '../services/types';
import { TRootState, TAppDispatch } from '../store';

export const useAppDispatch = () => useDispatch<TAppDispatch>();

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;


// Use throughout your project instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
