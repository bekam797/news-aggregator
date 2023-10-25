import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticlesState } from '../types';

const initialState: ArticlesState = {
  data: [],
  currentPage: 1,
  totalPages: 1
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    incrementPage(state) {
      state.currentPage += 1;
    },
    setTotalPages(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
    addArticles(state, action: PayloadAction<Article[]>) {
      state.data.push(...action.payload);
    },
    setArticles(state, action: PayloadAction<Article[]>) {
      state.data = action.payload;
    }
  }
});

export const { incrementPage, setTotalPages, addArticles, setArticles } = articlesSlice.actions;
export default articlesSlice.reducer;
