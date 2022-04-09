import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '@redux/store';

// Define a type for the slice state
interface AuthState {
  isAuthenticated: boolean;
}

// Define the initial state using that type
const initialState: AuthState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

//Select slice name to get access to states
export const authSelector = (state: {auth: AuthState}) => state.auth;

export const {setAuthenticated} = authSlice.actions;

export default authSlice.reducer;
