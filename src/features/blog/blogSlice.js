import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { blogService } from './blogService';

export const getAllblogs = createAsyncThunk(
  'blog/get-blog',
  async (thunkAPI) => {
    try {
      return await blogService.getBlogs();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAblog = createAsyncThunk(
  'blog/geta-blog',
  async (id, thunkAPI) => {
    try {
      return await blogService.getBlog(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const blogState = {
  blog: '',
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
};

export const blogSlice = createSlice({
  name: 'blog',
  initialState: blogState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllblogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllblogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blog = action.payload;
      })
      .addCase(getAllblogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      })
      .addCase(getAblog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAblog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleblog = action.payload;
      })
      .addCase(getAblog.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});
export default blogSlice.reducer;
