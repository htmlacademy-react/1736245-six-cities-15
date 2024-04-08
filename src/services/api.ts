import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { BASE_URL, TIMEOUT } from './constants';
import {getToken} from './token';
import { StatusCodeMapping } from './constants';
import { store } from '../store';
import { setError } from '../store/action';
import { clearError } from '../store/thunks/clear-error';

export type TAxiosError = {
  type: string;
  message: string;
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearError());
};

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<TAxiosError>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = (error.response.data);

        processErrorHandle(detailMessage.message);
      }

      throw error;
    }
  );

  return api;
};
