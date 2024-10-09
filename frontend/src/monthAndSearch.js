import React from "react";

const MonthAndSearch = ({
  selectedMonth,
  onSearchChange,
  value,
  onMonthChange,
  onClear,
}) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center m-5 space-y-4 sm:space-y-0">
      <div className="flex items-center bg-[#f8df8c] font-semibold rounded-xl shadow-lg">
        <input
          className="bg-transparent rounded-l-xl p-3 focus:outline-none text-gray-800 placeholder-gray-600"
          type="text"
          value={value}
          onChange={onSearchChange}
          placeholder="Search transactions..."
        />
        <button
          className="bg-red-500 text-white rounded-r-xl p-3 hover:bg-red-600 transition duration-300"
          onClick={onClear}
        >
          Clear
        </button>
      </div>

      <div className="container max-w-max bg-[#ebb840] rounded-xl shadow-lg px-4 py-2">
        <select
          className="bg-transparent font-semibold text-gray-900 rounded-xl p-3 focus:outline-none"
          value={selectedMonth}
          onChange={onMonthChange}
        >
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MonthAndSearch;
