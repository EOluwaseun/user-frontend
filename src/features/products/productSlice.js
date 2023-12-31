import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productService } from './productService';

export const getAllProducts = createAsyncThunk(
  'product/get-product',
  async (thunkAPI) => {
    try {
      return await productService.getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addTowishlist = createAsyncThunk(
  'product/wishlist',
  async (prodId, thunkAPI) => {
    try {
      return await productService.addToWishList(prodId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const productState = {
  product: '',
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
};

export const productSlice = createSlice({
  name: 'product',
  initialState: productState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(addTowishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTowishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.wishlistadded = action.payload;
        state.message = 'product added to wishlist succefully';
      })
      .addCase(addTowishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});
export default productSlice.reducer;
