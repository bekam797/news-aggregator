import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateFilterProps {
  selectedDate: Date | null;
  handleDateChange: (date: Date | null) => void;
}

const DateFilter: React.FC<DateFilterProps> = ({ selectedDate, handleDateChange }) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleCalendarOpen = () => {
    setIsDatePickerOpen(true);
  };

  const handleCalendarClose = () => {
    setIsDatePickerOpen(false);
  };

  const CustomIconInput = React.forwardRef(function CustomIconInput({ value, onClick }: any, ref: any) {
    return (
      <button
        className={`bg-gray-50 w-[40px] h-[40px] rounded-full text-gray-400 ${
          isDatePickerOpen ? 'shadow-[0px_1px_1px_0px_rgba(65,69,73,0.3),0px_1px_3px_1px_rgba(65,69,73,.15)]' : ''
        }`}
        onClick={onClick}
        ref={ref}
      >
        <i className="fas fa-calendar-alt"></i>
      </button>
    );
  });

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        onCalendarOpen={handleCalendarOpen}
        onCalendarClose={handleCalendarClose}
        customInput={<CustomIconInput />}
      />
    </div>
  );
};

export default DateFilter;
