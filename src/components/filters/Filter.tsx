import React, { useState } from 'react';

interface FilterProps {
  options?: Array<{ name: string }>;
  selectedOption?: string | null;
  handleOptionChange?: (option: string) => void;
  filterType?: string;
}

const Filter: React.FC<FilterProps> = ({ options, selectedOption, handleOptionChange, filterType }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className={`bg-gray-50 rounded-lg p-2 text-gray-500 ${
          isOpen ? 'shadow-[0px_1px_1px_0px_rgba(65,69,73,0.3),0px_1px_3px_1px_rgba(65,69,73,.15)]' : ''
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {selectedOption ?? `Select ${filterType}`}
        <i className="fas fa-chevron-down ml-2"></i>
      </button>
      {isOpen && (
        <ul className="absolute bg-white border border-gray-200 rounded-lg mt-2 w-full">
          {options?.map((option, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                if (handleOptionChange) {
                  handleOptionChange(option.name);
                }
                setIsOpen(false);
              }}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
