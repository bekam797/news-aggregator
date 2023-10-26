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

    let endpoint = '/everything';
    let params: any = { page, pageSize: 10, q: 'news' };

    if (selectedSource.id === 'gnewsapi') {
      endpoint = '/top-headlines';
      params = {
        ...(selectedCategory && { category: selectedCategory.name }),
        ...(selectedCategory
          ? {}
          : {
              q: selectedCategory ? selectedCategory.name : 'news'
            }),
        ...(selectedDate && { from: new Date(selectedDate).toISOString() }),
        pageSize: 10,
        page
      };
    } else {
      if (selectedDate) {
        const localDate = new Date(selectedDate);
        const offset = localDate.getTimezoneOffset();
        const adjustedDate = new Date(localDate.getTime() - offset * 60 * 1000);
        params.from = adjustedDate.toISOString().split('T')[0];
      }
      if (selectedCategory) params.q = selectedCategory.name;
    }

    try {
      const response = await updatedAxiosInstance.get(endpoint, { params });

      let articles;
      if (selectedSource.id === 'newsapi') {
        articles = response.data.articles;
      } else if (selectedSource.id === 'gnewsapi') {
        articles = response.data.articles;
      }

      const totalPages = Math.ceil(
        (selectedSource.id === 'gnewsapi' ? response.data.totalArticles : response.data.totalResults) / params.pageSize
      );
      thunkAPI.dispatch(setTotalPages(totalPages));

      if (page === 1) {
        thunkAPI.dispatch(setArticles(articles));
      } else {
        thunkAPI.dispatch(addArticles(articles));
      }

      thunkAPI.dispatch(incrementPage());

      return articles;
    } catch (error) {
      console.error(error, 'errrrr');
      throw Error('Failed to fetch articles');
    }
  }
);

export default fetchArticles;
