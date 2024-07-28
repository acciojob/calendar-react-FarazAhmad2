import React, { useState } from "react";
import "../styles/App.css";
import MonthSelector from "./MonthSelector";
import YearDisplay from "./YearDisplay";
import NavigationButtons from "./NavigationButtons";

const Calender = () => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const renderDays = () => {
    const firstDay = getFirstDayOfMonth(month, year);
    const totalDays = daysInMonth(month, year);
    const daysArray = [];

    for (let i = 0; i < firstDay; i++) {
      daysArray.push(<td key={`empty-${i}`}></td>);
    }

    for (let i = 1; i <= totalDays; i++) {
      daysArray.push(<td key={i}>{i}</td>);
    }

    const rows = [];
    let cells = [];

    daysArray.forEach((day, i) => {
      if (i % 7 !== 0 || i == 0) {
        cells.push(day);
      } else {
        rows.push(cells);
        cells = [day];
      }
    });
    rows.push(cells);
    return rows.map((d, i) => <tr key={i}>{d}</tr>);
  };

  return (
    <div>
      <h1 id="heading">Calender</h1>
      <div style={{ display: "flex" }}>
        <MonthSelector month={month} setMonth={setMonth} />
        <YearDisplay year={year} setYear={setYear} />
      </div>
      <table id="calender">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{renderDays()}</tbody>
      </table>
      <NavigationButtons
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
      />
    </div>
  );
};

export default Calender;
