import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import { Endpoints } from '../../services/constants';
import { TUserAuthorization, TUserData } from '../../services/types/user';
import { dropToken, saveToken } from '../../services/token';

export const checkAuth = createAsyncThunk<
    TUserAuthorization,
    undefined,
    {
        extra: AxiosInstance;
    }
>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const response = await api.get<TUserAuthorization>(Endpoints.Login);
    return response.data;
  }
);

export const login = createAsyncThunk<void, TUserData, {
    extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { extra: api }) => {
    const { data: { token } } = await api.post<{ token: string }>(Endpoints.Login, { email, password });
    saveToken(token);
  }
);

export const logout = createAsyncThunk<void, undefined, {
    extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(Endpoints.Logout);
    dropToken();
    // try {
    //   await api.delete(Endpoints.Logout);
    //   dropToken();
    // } catch (error) {
    //   console.log(error);
    // }
  }
);
