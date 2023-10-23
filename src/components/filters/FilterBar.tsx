import React from 'react';
import DateFilter from './DateFilter';
import Filter from './Filter'; // Import the generic Filter component

interface FilterBarProps {
  selectedDate?: string;
  handleDateChange?: any;
  selectedSource?: any;
  handleSourceChange?: any;
  sources?: any;
  selectedCategory?: any;
  handleCategoryChange?: any;
}

const categories = [
  { name: 'U.S' },
  { name: 'World' },
  { name: 'Local' },
  { name: 'Business' },
  { name: 'Technology' },
  { name: 'Entertainment' },
  { name: 'Sports' },
  { name: 'Science' },
  { name: 'Health' },
  { name: 'Politics' }
];

const sources = [{ name: 'BBC News' }, { name: 'The New York Times' }, { name: 'The Guardian' }];

const FilterBar: React.FC<FilterBarProps> = ({
  selectedDate,
  handleDateChange,
  selectedSource,
  handleSourceChange,
  selectedCategory,
  handleCategoryChange
}) => {
  return (
    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-start lg:items-center p-4 gap-[10px]">
      <div className="flex gap-[10px]">
        <Filter
          options={sources}
          selectedOption={selectedSource}
          handleOptionChange={handleSourceChange}
          filterType="Source"
        />
        <Filter
          options={categories}
          selectedOption={selectedCategory}
          handleOptionChange={handleCategoryChange}
          filterType="Category"
        />
      </div>
      <div className="flex items-center gap-[10px]">
        <DateFilter />
      </div>
    </div>
  );
};

export default FilterBar;
