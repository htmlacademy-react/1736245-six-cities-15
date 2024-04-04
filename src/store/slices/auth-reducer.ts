import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../services/constants';

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
//   extraReducers: (builder) => {
//     builder
//       .addCase(checkAuthAction.fulfilled, (state) => {
//         state.authorizationStatus = AuthorizationStatus.Auth;
//       })
//       .addCase(checkAuthAction.rejected, (state) => {
//         state.authorizationStatus = AuthorizationStatus.NoAuth;
//       })
//       .addCase(loginAction.fulfilled, (state) => {
//         state.authorizationStatus = AuthorizationStatus.Auth;
//       })
//       .addCase(loginAction.rejected, (state) => {
//         state.authorizationStatus = AuthorizationStatus.NoAuth;
//       })
//       .addCase(logoutAction.fulfilled, (state) => {
//         state.authorizationStatus = AuthorizationStatus.NoAuth;
//       });
//   },
});

// Export reducer
export default authSlice.reducer;
