import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { contactService } from './contactService';

export const createEnquiry = createAsyncThunk(
  'contact/create-enquiry',
  async (contactData, thunkAPI) => {
    try {
      return await contactService.postQuery(contactData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const contactState = {
  contact: '',
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState: contactState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createEnquiry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createEnquiry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.contact = action.payload;
        if (state.isSuccess === true) {
          alert('contact form submitted successfully');
        }
      })
      .addCase(createEnquiry.rejected, (state, action) => {
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
export default contactSlice.reducer;
