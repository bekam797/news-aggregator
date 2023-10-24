import ArticleList from '../../components/articles/ArticleList';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchArticles from '../../redux/thunks/fetchArticlesThunk';
import { RootState, AppDispatch } from '../../redux/store';
import InfiniteScroll from 'react-infinite-scroll-component';

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, currentPage, totalPages } = useSelector((state: RootState) => state.articles);
  const { selectedDate, selectedCategory } = useSelector((state: RootState) => state.filters);

  const fetchMoreArticles = () => {
    dispatch(fetchArticles({ page: currentPage + 1 }));
  };

  useEffect(() => {
    dispatch(fetchArticles({ page: 1 }));
  }, [dispatch, selectedDate, selectedCategory]);

  return (
    <div className="max-w-screen-xl m-auto p-2">
      <h2 className="text-md pl-4">All News</h2>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreArticles}
        hasMore={currentPage < totalPages}
        loader={<h4>Loading...</h4>}
      >
        <ArticleList articles={data} />
      </InfiniteScroll>
    </div>
  );
};

export default HomePage;
