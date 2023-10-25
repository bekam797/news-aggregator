import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltersState, Source, Category } from '../../types';

const sources = [{ name: 'NewsAPI', url: 'https://newsapi.org/v2/', apiKey: '3f754afa648143b9bc6fe0a532d1fd65' }];

const initialState: FiltersState = {
  selectedDate: null,
  selectedSource: sources[0],
  selectedCategory: null
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSelectedDate(state, action: PayloadAction<string | null>) {
      state.selectedDate = action.payload;
    },
    setSelectedSource(state, action: PayloadAction<Source>) {
      state.selectedSource = action.payload;
    },
    setSelectedCategory(state, action: PayloadAction<Category>) {
      state.selectedCategory = action.payload;
    }
  }
});

export const { setSelectedDate, setSelectedSource, setSelectedCategory } = filtersSlice.actions;
export default filtersSlice.reducer;
