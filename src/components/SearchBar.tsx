import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../redux/filters/searchBarSlice';
import { useNavigate } from 'react-router-dom';
import { performSearch } from '../redux/thunks/searchThunk';
import { AppDispatch, RootState } from '../redux/store';
import { SearchBarProps } from '../types';

const SearchBar: React.FC<SearchBarProps> = ({ containerClassName }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { selectedSource } = useSelector((state: RootState) => state.filters);
  const searchValue = useSelector((state: RootState) => state.searchBar?.searchValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    dispatch(setSearchValue(newValue));
    localStorage.setItem('searchValue', newValue);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedSource && searchValue) {
      dispatch(performSearch({ query: searchValue, source: selectedSource }));
      navigate('search-results');
    }
  };

  return (
    <div className={`${containerClassName}`}>
      <label className="mb-2 text-sm font-medium sr-only text-white">Search</label>
      <form onSubmit={handleFormSubmit}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            value={searchValue}
            onChange={handleInputChange}
            className="block w-full p-3 pl-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:outline-none focus:shadow-[0px_1px_1px_0px_rgba(65,69,73,0.3),0px_1px_3px_1px_rgba(65,69,73,.15)]"
            placeholder="Search for topics..."
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
