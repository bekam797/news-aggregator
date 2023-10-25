import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import ArticleList from '../../components/articles/ArticleList';
import { performSearch } from '../../redux/thunks/searchThunk';

const SearchResultsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { results, loading, error } = useSelector((state: RootState) => state.searchResults);
  const { selectedSource, selectedDate } = useSelector((state: RootState) => state.filters);
  const savedSearchValue = localStorage.getItem('searchValue');

  useEffect(() => {
    if (savedSearchValue && selectedSource && selectedDate) {
      dispatch(performSearch({ query: savedSearchValue, source: selectedSource }));
    }
  }, [dispatch, savedSearchValue, selectedSource, selectedDate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-screen-xl m-auto p-2">
      {results.length ? <ArticleList articles={results} /> : <div>Nothing found</div>}
    </div>
  );
};

export default SearchResultsPage;
