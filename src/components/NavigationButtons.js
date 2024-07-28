import React from "react";

const NavigationButtons = ({ month, setMonth, year, setYear }) => {
  const handlePrevYear = () => {
    setYear(year - 1);
  };

  const handleNextYear = () => {
    setYear(year + 1);
  };

  const handlePrevMonth = () => {
    if (month == 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
    console.log(month);
  };
  const handleNextMonth = () => {
    if (month == 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
    console.log(month);
  };

  return (
    <div>
      <button id="prev-year" onClick={handlePrevYear}>
        &lt;&lt;
      </button>
      <button id="prev-month" onClick={handlePrevMonth}>
        &lt;
      </button>
      <button id="next-month" onClick={handleNextMonth}>
        &gt;
      </button>
      <button id="next-year" onClick={handleNextYear}>
        &gt;&gt;
      </button>
    </div>
  );
};

export default NavigationButtons;
