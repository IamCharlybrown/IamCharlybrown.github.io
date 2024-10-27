import React, { useState } from 'react';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const generateCalendar = (month, year) => {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const calendar = [];

  let dayCount = 1;

  // Fill the calendar with empty spaces for days before the first of the month
  for (let i = 0; i < firstDay; i++) {
    calendar.push(null);
  }

  // Fill the calendar with the actual days of the month
  while (dayCount <= daysInMonth) {
    calendar.push(dayCount);
    dayCount++;
  }

  return calendar;
};

const StyledCalendar = () => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const calendarDays = generateCalendar(month, year);
  const today = new Date();

  return (
    <div className="bg-[#2E2E2E] p-4 rounded-lg w-80">
      <h2 className="text-white text-lg font-bold mb-2">{`${month + 1}/${year}`}</h2>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map((day) => (
          <div key={day} className="text-gray-400 font-medium text-center">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`text-center p-2 rounded-lg 
              ${day === today.getDate() && today.getMonth() === month && today.getFullYear() === year ? 
                'bg-[#161616] text-white' : 'text-white'}
              ${day ? 'hover:bg-[#161616] cursor-pointer' : 'text-transparent'}
            `}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyledCalendar;
