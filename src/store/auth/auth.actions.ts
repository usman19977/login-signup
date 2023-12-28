import AuthService from '../../services/authentication/auth.services';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading } from '../loading/loading.slice';
import { LoginCredentials, RegisterCredentials } from '../../interfaces/AuthInterface';
import { logout, setDetails } from './auth.slice';



export const userLoginAuthAction = createAsyncThunk(
  'auth/login',
  async ({ username, password }: LoginCredentials, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoading(true));
      let authService = new AuthService();
      let data = await authService.authenticateUser(username, password);
      dispatch(setDetails(data));
      dispatch(setLoading(false));


      return data;
    } catch (error: any) {
      dispatch(setLoading(false));

      // Return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const refreshTokenAction = createAsyncThunk(
  'auth/refresh-token',
  async (_, { rejectWithValue }) => {
    try {
      let authService = new AuthService();
      let data = await authService.getRefreshToken();
      return data;
    } catch (error: any) {
      // Return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getUserDetailsAction = createAsyncThunk(
  'auth/getUserDetails',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoading(true));
      let authService = new AuthService();
      let data = await authService.getUserDetails();

      dispatch(setLoading(false));
      return data;
    } catch (error: any) {
      dispatch(setLoading(false));

      // Return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const logoutUserAction = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoading(true));
      let authService = new AuthService();
      let data = await authService.signOut();
      dispatch(logout());
      dispatch(setLoading(false));
      return data;
    } catch (error: any) {
      dispatch(setLoading(false));

      // Return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


export const userRegisterAction = createAsyncThunk(
  'auth/register',
  async ({ email, password, name }: RegisterCredentials, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoading(true));
      let authService = new AuthService();
      let data = await authService.register({
        name: name,
        email: email,
        password: password
      });
      dispatch(setDetails(data));
      dispatch(setLoading(false));


      return data;
    } catch (error: any) {
      dispatch(setLoading(false));

      // Return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

