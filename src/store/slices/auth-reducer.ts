import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../services/constants';
import { checkAuth, login, logout } from '../thunks/user';

type TState = {
  authStatus: AuthorizationStatus;
}

const initialState: TState = {
  authStatus: AuthorizationStatus.NoAuth,
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
      .addCase(login.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.Auth;
      })
      .addCase(login.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
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
