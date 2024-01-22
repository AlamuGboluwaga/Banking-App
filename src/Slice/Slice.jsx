// dataSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define your asynchronous operation
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    // Perform your asynchronous data fetching here
    const response = await fetch("your-api-endpoint");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  data: null,
  loading: "idle",
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = "idle";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
