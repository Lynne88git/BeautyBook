import React, { useState } from 'react';
import { startOfDay, addMinutes, format } from 'date-fns';
import { iTimeSlotsProps } from '../../Interfaces/iTimeSlotsProp';

function TimeSlots({ handleTimeSelection }: iTimeSlotsProps) {
  const [selectedTime, setSelectedTime] = useState('');

  const generateTimeSlots = () => {
    const start = addMinutes(startOfDay(new Date()), 8 * 60); // Start from 08:00 current day
    const end = addMinutes(startOfDay(new Date()), 18 * 60); // End at 18:00 same day

    const timeSlots = [];
    let currentTime = start;

    while (currentTime < end) {
      const timeSlot = format(currentTime, 'HH:mm'); // Format the time as desired, e.g., "8:00 AM"
      timeSlots.push(timeSlot);
      currentTime = addMinutes(currentTime, 30); // Increment by 30 minutes
    }

    return timeSlots;
  };

  const timeSlots = generateTimeSlots();

  const handleTimeSlotClick = (
    timeSlot: string,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setSelectedTime(timeSlot);
    handleTimeSelection(timeSlot, event);
  };

  return (
    <div>
      <label htmlFor="timeSlot">Select a time slot:</label>
      <div>
        {timeSlots.map((timeSlot, index) => (
          <button
            className="btn-primary text-white px-4 py-1 rounded-full my-2 mr-4"
            key={index}
            onClick={(event) => handleTimeSlotClick(timeSlot, event)}
          >
            {timeSlot}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TimeSlots;
