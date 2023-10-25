import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Bookmark, BookmarksState } from '../types';

const initialState: BookmarksState = {
  bookmarks: JSON.parse(localStorage.getItem('bookmarks') ?? '[]')
};

export const isBookmarked = (state: RootState, url: string): boolean => {
  return state.bookmarks.bookmarks.some((bookmark) => bookmark.url === url);
};

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    addBookmark(state, action: PayloadAction<Bookmark>) {
      state.bookmarks.push(action.payload);
    },
    removeBookmark(state, action: PayloadAction<string>) {
      state.bookmarks = state.bookmarks.filter((bookmark) => bookmark.url !== action.payload);
    }
  }
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
