import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { productService } from './productService';

export const getAllProducts = createAsyncThunk(
  'product/get',
  async (data, thunkAPI) => {
    try {
      return await productService.getProducts(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAProduct = createAsyncThunk(
  'product/getaproduct',
  async (id, thunkAPI) => {
    try {
      return await productService.getSingleProduct(id);
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

export const userRatings = createAsyncThunk(
  'product/rating',
  async (data, thunkAPI) => {
    try {
      return await productService.addRating(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const resetState = createAction('Reset_all');

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
      })
      .addCase(getAProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleProduct = action.payload;
        state.message = 'product fetched succefully';
      })
      .addCase(getAProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(userRatings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userRatings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.ratingadded = action.payload;
        state.message = 'rating added succefully';
        if (state.isSuccess) {
          alert('rating added successfully');
        }
      })
      .addCase(userRatings.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(resetState, () => productState);
  },
});
export default productSlice.reducer;
