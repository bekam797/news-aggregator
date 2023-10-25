import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { updateAxiosInstance } from '../../axios';
import { addArticles, setTotalPages, incrementPage, setArticles } from '../articlesSlice';
import { Article, FetchArticlesArgs } from '../../types';

const fetchArticles = createAsyncThunk<Article[], FetchArticlesArgs>(
  'articles/fetchArticles',
  async (args, thunkAPI) => {
    const { page } = args;
    const { selectedSource, selectedDate, selectedCategory }: any = (thunkAPI.getState() as RootState).filters;
    const updatedAxiosInstance = updateAxiosInstance(selectedSource);

    const params: any = { sortBy: 'popularity', page, pageSize: 10 };

    if (selectedDate) {
      const localDate = new Date(selectedDate);
      const offset = localDate.getTimezoneOffset();
      const adjustedDate = new Date(localDate.getTime() - offset * 60 * 1000);
      const formattedDate = adjustedDate.toISOString().split('T')[0];

      params.from = formattedDate;
    }

    if (selectedCategory) params.q = selectedCategory.name;

    if (!params.q && !params.domains) {
      params.q = 'news';
    }

    try {
      const response = await updatedAxiosInstance.get('/everything', { params });

      const totalPages = Math.ceil(response.data.totalResults / params.pageSize);
      thunkAPI.dispatch(setTotalPages(totalPages));

      if (page === 1) {
        thunkAPI.dispatch(setArticles(response.data.articles));
      } else {
        thunkAPI.dispatch(addArticles(response.data.articles));
      }

      thunkAPI.dispatch(incrementPage());

      return response.data.articles;
    } catch (error) {
      console.error(error, 'errrrr');
      throw Error('Failed to fetch articles');
    }
  }
);

export default fetchArticles;
