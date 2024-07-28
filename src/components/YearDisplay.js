import React, { useState } from "react";

const YearDisplay = ({ year, setYear }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [newYear, setNewYear] = useState(year);

  const handleYearChange = (e) => {
    setNewYear(e.target.value);
  };

  const saveYear = () => {
    setYear(+newYear);
    setIsEditable(false);
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      saveYear();
    }
  };

  return (
    <div>
      <div id="year-display" onDoubleClick={() => setIsEditable(true)}>
        {isEditable ? (
          <input
            onChange={handleYearChange}
            value={newYear}
            onBlur={saveYear}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <span>{year}</span>
        )}
      </div>
    </div>
  );
};

export default YearDisplay;
