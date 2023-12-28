import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './userService';

const initialState = {
  user: '',
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//this login is exported to login page
export const loginUser = createAsyncThunk(
  'auth/user-login', // the auth then d api url
  async (userData, thunkApi) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdUser = action.payload;
        // state.message = 'success';
        if (state.isSuccess === true) {
          alert('user created succesfully');
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isError === true) {
          alert('something went wrong');
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
        // state.message = 'success';
        if (state.isSuccess === true) {
          // take token from redux
          localStorage.setItem('token', action.payload.token);
          alert('user logged in succesfully');
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isError === true) {
          alert('something went wrong');
        }
      });
  },
});
export default authSlice.reducer;
