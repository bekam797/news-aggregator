import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import ArticleList from '../../components/articles/ArticleList';
import { clearSearchValue } from '../../redux/filters/searchBarSlice';

const FavoritesPage: React.FC = () => {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state: RootState) => state?.bookmarks?.bookmarks);

  useEffect(() => {
    dispatch(clearSearchValue());
    localStorage.removeItem('searchValue');
  }, [dispatch]);

  return (
    <div className="max-w-screen-xl m-auto p-2">
      <h2 className="text-md pl-4 text-2xl pb-10">Favorites</h2>
      {bookmarks.length ? (
        <ArticleList articles={bookmarks} />
      ) : (
        <h1 className="text-center pt-18 text-xl">You Have Not Favorite Articles</h1>
      )}
    </div>
  );
};

export default FavoritesPage;
