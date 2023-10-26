import { createAsyncThunk } from '@reduxjs/toolkit';
import { Source, updateAxiosInstance } from '../../axios';
import { RootState } from '../store';

export const performSearch = createAsyncThunk(
  'search/performSearch',
  async (args: { query: string; source: Source }, thunkAPI) => {
    const { query, source } = args;
    const { selectedDate }: any = (thunkAPI.getState() as RootState).filters;

    const axiosInstance = updateAxiosInstance(source);

    let endpoint = '/everything';
    let params: any = { sortBy: 'popularity', q: query };

    if (source.id === 'gnewsapi') {
      endpoint = '/search';
      params = { q: query };
    }

    if (selectedDate) {
      const localDate = new Date(selectedDate);
      const offset = localDate.getTimezoneOffset();
      const adjustedDate = new Date(localDate.getTime() - offset * 60 * 1000);

      if (source.id === 'gnewsapi') {
        const formattedDate = adjustedDate.toISOString();
        params.from = formattedDate;
      } else {
        const formattedDate = adjustedDate.toISOString().split('T')[0];
        params.from = formattedDate;
      }
    }

    try {
      const response = await axiosInstance.get(endpoint, { params });

      return response.data.articles;
    } catch (error: any) {
      console.error('Error:', error);
      return thunkAPI.rejectWithValue(error.message || 'Something went wrong');
    }
  }
);
