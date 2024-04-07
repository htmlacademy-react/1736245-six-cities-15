import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import { Endpoints } from '../../services/constants';
import { TUser, TUserAuthorization, TUserData } from '../../services/types/user';
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

export const login = createAsyncThunk<TUser, TUserData, {
    extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { extra: api }) => {
    const response = await api.post<TUser>(Endpoints.Login, { email, password });
    const token = response.data.token;
    if (typeof token === 'string') {
      saveToken(token);
    } else {
      throw new Error('Token is missing');
    }
    return response.data;
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
