import React, { useState } from 'react';

interface Source {
  name: string;
  url: string;
  apiKey: string;
}

interface SourceFilterProps {
  options?: Source[];
  selectedOption?: Source | null;
  handleOptionChange?: (option: Source) => void;
  filterType?: string;
}

const SourceFilter: React.FC<SourceFilterProps> = ({ options, selectedOption, handleOptionChange, filterType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

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
        {selectedOption ? selectedOption.name : `Select ${filterType}`}
        <i className="fas fa-chevron-down ml-2"></i>
      </button>
      {isOpen && (
        <ul className="absolute bg-white border border-gray-200 rounded-lg mt-2 w-40">
          {options?.map((option, index) => (
            <li
              key={index}
              className={`p-2 cursor-pointer ${selectedOptionIndex === index ? 'bg-gray-100' : ''} hover:bg-gray-100`}
              onClick={() => {
                if (handleOptionChange) {
                  handleOptionChange(option);
                }
                setIsOpen(false);
                setSelectedOptionIndex(index);
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

export default SourceFilter;
