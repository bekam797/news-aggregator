import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Article {
  id: number;
}

interface ArticlesState {
  data: any[];
  currentPage: number;
  totalPages: number;
  loading: boolean;
}

const initialState: ArticlesState = {
  data: [],
  currentPage: 1,
  totalPages: 1,
  loading: false
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
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    addArticles(state, action: PayloadAction<Article[]>) {
      state.data.push(...action.payload);
    },
    setArticles(state, action: PayloadAction<Article[]>) {
      state.data = action.payload;
    }
  }
});

export const { incrementPage, setTotalPages, setLoading, addArticles, setArticles } = articlesSlice.actions;
export default articlesSlice.reducer;
