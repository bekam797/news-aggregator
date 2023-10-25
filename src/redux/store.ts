import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import filtersReducer from './filters/filtersSlice';
import searchBarReducer from './filters/searchBarSlice';
import articlesReducer from './articlesSlice';
import bookmarksReducer from './bookmarksSlice';
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    searchBar: searchBarReducer,
    articles: articlesReducer,
    bookmarks: bookmarksReducer,
    searchResults: searchReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
});

store.subscribe(() => {
  localStorage.setItem('bookmarks', JSON.stringify(store.getState().bookmarks.bookmarks));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
