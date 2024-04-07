import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../services/constants';
import { checkAuth, login, logout } from '../thunks/user';
import { TUser } from '../../services/types/user';

type TState = {
  authStatus: AuthorizationStatus;
  user: TUser | null;
  authError?: string;
}

const initialState: TState = {
  authStatus: AuthorizationStatus.NoAuth,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.user = null;
      });
  },
});

// Export reducer
export default authSlice.reducer;

// .addCase(loginAction.fulfilled, (state) => {
//   state.authorizationStatus = AuthorizationStatus.Auth;
// })
// .addCase(loginAction.rejected, (state) => {
//   state.authorizationStatus = AuthorizationStatus.NoAuth;
// })
// .addCase(logoutAction.fulfilled, (state) => {
//   state.authorizationStatus = AuthorizationStatus.NoAuth;
// });
