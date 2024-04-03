import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { BASE_URL, TIMEOUT } from './constants';
import {getToken} from './token';
import { StatusCodeMapping } from './constants';
import { store } from '../store';

// error type
export type TAxiosError = {
  type: string;
  message: string;
};

//error handling
const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const showError = (message: string): void => {
  store.dispatch(setError(message));
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

        showError(detailMessage.message);
      }

      throw error;
    }
  );

  return api;
};
