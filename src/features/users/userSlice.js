import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './userService';

const getCustomerFromLocalStorage = localStorage.getItem('customer')
  ? JSON.parse(localStorage.getItem('customer'))
  : null;

const initialState = {
  user: getCustomerFromLocalStorage,
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

export const getProductWhislist = createAsyncThunk(
  'user/wishlist',
  async (thunkApi) => {
    try {
      return await authService.getUserwishList();
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addProdToCart = createAsyncThunk(
  'user/cart/add',
  async (cartData, thunkApi) => {
    try {
      return await authService.addToCart(cartData);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getUserCart = createAsyncThunk(
  'user/cart/get',
  async (thunkApi) => {
    try {
      return await authService.getCart();
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getOrders = createAsyncThunk(
  'user/order/get',
  async (thunkApi) => {
    try {
      return await authService.getUserOrders();
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteACartProduct = createAsyncThunk(
  'user/cart/product/delete',
  async (id, thunkAPI) => {
    try {
      return await authService.removeProductFromCart(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateACartProduct = createAsyncThunk(
  'user/cart/product/update',
  async (cartDtails, thunkAPI) => {
    try {
      return await authService.updateProductFromCart(cartDtails);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateProfile = createAsyncThunk(
  'user/profile/update',
  async (data, thunkAPI) => {
    try {
      return await authService.updateAProfile(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const forgotAPassToken = createAsyncThunk(
  'user/passtoken/token',
  async (data, thunkAPI) => {
    try {
      return await authService.forgotAPasswordToken(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
        state.customer = action.payload;
        state.message = 'success';
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isError === true) {
          alert('Something went wrong');
        }
      })
      .addCase(getProductWhislist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductWhislist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.wishlist = action.payload;
      })
      .addCase(getProductWhislist.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(addProdToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProdToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cartProduct = action.payload;
        if (state.isSuccess) {
          alert('Product added to cart successfully');
        }
      })
      .addCase(addProdToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(getUserCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.getProductCarts = action.payload;
      })
      .addCase(getUserCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(deleteACartProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteACartProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedCartProduct = action.payload;
        if (state.isSuccess) {
          alert('Product deleted from cart successfully');
        }
      })
      .addCase(deleteACartProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isError) {
          alert('Something went wrong');
        }
      })
      .addCase(updateACartProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateACartProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedCartProduct = action.payload;
        // if (state.isSuccess) {
        //   alert('Product updated from cart successfully');
        // }
      })
      .addCase(updateACartProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isError) {
          alert('Something went wrong');
        }
      })
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.OrderProducts = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updateAUser = action.payload;
        if (state.isSuccess === true) {
          alert('Profile updated successfully');
        }
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isError === true) {
          alert('Something went wrong');
        }
      })
      .addCase(forgotAPassToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotAPassToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.token = action.payload;
        if (state.isSuccess) {
          alert('email sent successfully');
        }
      })
      .addCase(forgotAPassToken.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
        if (state.isError) {
          alert('Something went wrong');
        }
      });
  },
});
export default authSlice.reducer;
