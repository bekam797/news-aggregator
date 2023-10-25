import { createSlice } from '@reduxjs/toolkit';

const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState: {
    searchValue: localStorage.getItem('searchValue') ?? ''
  },
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    clearSearchValue(state) {
      state.searchValue = '';
    }
  }
});

export const { setSearchValue, clearSearchValue } = searchBarSlice.actions;
export default searchBarSlice.reducer;
