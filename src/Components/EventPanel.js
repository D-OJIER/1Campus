import React from 'react';
import './EventPanel.css';

const EventPanel = ({ selectedDay, eventDetails, eventImage, onClose }) => {
  return (
    <div className="event-panel">
      <button className="close-button" onClick={onClose}>Close</button>
      <h3>Date:{selectedDay}|3|24</h3>
      <p className='primary-heading'>{eventDetails}</p>
      {eventImage && <img src={eventImage} alt='' />} {/* Ensure eventImage is properly rendered */}
      <button className='primary-button3'>More Details</button>
    </div>
  );
};



export default EventPanel;
