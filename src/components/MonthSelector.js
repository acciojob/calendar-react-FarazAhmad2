import React from "react";

const MonthSelector = ({ month, setMonth }) => {
  const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  return (
    <div>
      <select id="month-dropdown" onChange={(e) => setMonth(+e.target.value)} value={month}>
        {months.map((monthName, idx) => (
          <option key={idx} value={idx}>{monthName}</option>
        ))}
      </select>
    </div>
  );
};

export default MonthSelector;
