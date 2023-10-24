import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import filtersReducer from './filters/filtersSlice';
import searchBarReducer from './filters/searchBarSlice';
import articlesReducer from './articlesSlice';

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    searchBar: searchBarReducer,
    articles: articlesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
