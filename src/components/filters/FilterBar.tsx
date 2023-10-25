import React, { useEffect } from 'react';
import DateFilter from './DateFilter';
import CategoryFilter from './CategoryFilter';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { setSelectedDate, setSelectedSource, setSelectedCategory } from '../../redux/filters/filtersSlice';
import SourceFilter from './SourceFilter';
import { Source, updateAxiosInstance } from '../../axios';
import { useLocation } from 'react-router-dom';
import { Category } from '../../types';

const categories: Category[] = [
  { name: 'world' },
  { name: 'local' },
  { name: 'business' },
  { name: 'technology' },
  { name: 'entertainment' },
  { name: 'sports' },
  { name: 'science' },
  { name: 'health' },
  { name: 'politics' }
];

const sources = [{ name: 'NewsAPI', url: 'https://newsapi.org/v2/', apiKey: '3f754afa648143b9bc6fe0a532d1fd65' }];

const FilterBar: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedDate, selectedSource, selectedCategory } = useSelector((state: RootState) => state.filters);
  const location = useLocation();
  const isFavoritesPage = location.pathname === '/favorites';
  const isSearchPage = location.pathname === '/search-results';

  useEffect(() => {
    if (selectedSource) {
      updateAxiosInstance(selectedSource);
    }
  }, [selectedSource]);

  const handleDateChange = (date: Date | null) => {
    const dateString = date ? date.toISOString() : null;
    dispatch(setSelectedDate(dateString));
  };

  const handleSourceChange = (source: Source) => {
    dispatch(setSelectedSource(source));
  };

  const handleCategoryChange = (category: Category) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-start lg:items-center p-4 gap-[10px] border-solid border-b-[1px] border-b-[#dadce0]">
      <div className="flex gap-[10px]">
        <SourceFilter
          options={sources}
          selectedOption={selectedSource}
          handleOptionChange={handleSourceChange}
          filterType="Source"
        />
        {!isFavoritesPage && !isSearchPage && (
          <CategoryFilter
            options={categories}
            selectedOption={selectedCategory}
            handleOptionChange={handleCategoryChange}
            filterType="Category"
          />
        )}
      </div>
      {!isFavoritesPage && (
        <div className="flex items-center gap-[10px]">
          <DateFilter selectedDate={selectedDate ? new Date(selectedDate) : null} handleDateChange={handleDateChange} />
        </div>
      )}
    </div>
  );
};

export default FilterBar;
