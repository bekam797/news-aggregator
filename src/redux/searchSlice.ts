import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { performSearch } from './thunks/searchThunk';
import { SearchResult, SearchState } from '../types';

const initialState: SearchState = {
  results: [],
  loading: false,
  error: null
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(performSearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(performSearch.fulfilled, (state, action: PayloadAction<SearchResult[]>) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(performSearch.rejected, (state, action) => {
        state.loading = false;
      });
  }
});

export default searchSlice.reducer;
