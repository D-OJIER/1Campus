import React, { useState } from 'react';
import EventPanel from './EventPanel.js';
import './Calendar.css'; 

const Calendar = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [showEventPanel, setShowEventPanel] = useState(false);
  const [eventDetails, setEventDetails] = useState('');
  const [eventImage, setEventImage] = useState(null); // State for storing event image

  // Function to get days in a month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to generate days array for a month
  const generateDaysArray = (month, year) => {
    const daysInMonth = getDaysInMonth(month, year);
    return Array.from({ length: daysInMonth }, (_, index) => index + 1);
  };

  // Function to handle day click
  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowEventPanel(true);

    // Check if event details exist for the clicked day
    const eventKey = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${day}`;
    if (events && events[eventKey]) {
      
      setEventDetails(events[eventKey].title); // Set event title as event details
      // Check if there's an image associated with the event
      if (events[eventKey].image) {
        setEventImage(events[eventKey].image);
      } else {
        setEventImage(null); // Reset event image if no image found
      }
    } else {
      // Set a default message if no event details are found
      setEventDetails("No event details available.");
      setEventImage(null); // Reset event image if no event details found
    }
  };

  // Function to handle previous month navigation
  const handlePreviousMonth = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  // Function to handle next month navigation
  const handleNextMonth = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  // Function to close the event panel
  const handleCloseEventPanel = () => {
    setShowEventPanel(false);
    setSelectedDay(null);
    setEventDetails('');
    setEventImage(null);
  };

  // Function to render days for the current month
  const renderDays = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const daysArray = generateDaysArray(month, year);

    return daysArray.map(day => (
      <button 
        key={day}
        className={day === currentDate.getDate() ? "current-date" : ""}
        onClick={() => handleDayClick(day)}
      >
        {day}
      </button>
    ));
  };

  return (
    <div>
      <div className="calendar-container">
        <div className="calendar-nav">
          <button onClick={handlePreviousMonth}>Previous</button>
          <h2>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h2>
          <button onClick={handleNextMonth}>Next</button>
        </div>
        <div className="calendar">
          {renderDays()}
        </div>
        {showEventPanel && <EventPanel selectedDay={selectedDay} eventDetails={eventDetails} eventImage={eventImage} onClose={handleCloseEventPanel} />}
      </div>
    </div>
  );
};

export default Calendar;
