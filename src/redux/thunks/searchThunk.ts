import { createAsyncThunk } from '@reduxjs/toolkit';
import { Source, updateAxiosInstance } from '../../axios';
import { RootState } from '../store';

export const performSearch = createAsyncThunk(
  'search/performSearch',
  async (args: { query: string; source: Source }, thunkAPI) => {
    const { query, source } = args;
    const { selectedDate }: any = (thunkAPI.getState() as RootState).filters;

    const axiosInstance = updateAxiosInstance(source);
    const params: any = { sortBy: 'popularity', q: query };

    if (selectedDate) {
      const localDate = new Date(selectedDate);
      const offset = localDate.getTimezoneOffset();
      const adjustedDate = new Date(localDate.getTime() - offset * 60 * 1000);
      const formattedDate = adjustedDate.toISOString().split('T')[0];

      params.from = formattedDate;
    }

    try {
      const response = await axiosInstance.get('/everything', { params });

      return response.data.articles;
    } catch (error: any) {
      console.error('Error:', error);
      return thunkAPI.rejectWithValue(error.message || 'Something went wrong');
    }
  }
);
