import React, { useEffect } from 'react';
import DateFilter from './DateFilter';
import CategoryFilter from './CategoryFilter';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { setSelectedDate, setSelectedSource, setSelectedCategory } from '../../redux/filters/filtersSlice';
import SourceFilter from './SourceFilter';
import { updateAxiosInstance } from '../../axios';

interface Category {
  name: string;
}
export interface Source {
  name: string;
  url: string;
  apiKey: string;
}

const categories: Category[] = [
  { name: 'U.S' },
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

const sources = [
  { name: 'NewsAPI', url: 'https://newsapi.org/v2/', apiKey: '3f754afa648143b9bc6fe0a532d1fd65' },
  { name: 'NewsAGI', url: 'https://newsapi.org/v3/', apiKey: '3f754afa648143b9bc6fe0a532d1fd65' }
];

const FilterBar: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedDate, selectedSource, selectedCategory } = useSelector((state: RootState) => state.filters);

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
        <CategoryFilter
          options={categories}
          selectedOption={selectedCategory}
          handleOptionChange={handleCategoryChange}
          filterType="Category"
        />
      </div>
      <div className="flex items-center gap-[10px]">
        <DateFilter selectedDate={selectedDate ? new Date(selectedDate) : null} handleDateChange={handleDateChange} />
      </div>
    </div>
  );
};

export default FilterBar;
