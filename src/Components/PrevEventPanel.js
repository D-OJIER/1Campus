import React, { useState } from 'react';
import './EventPanel.css';

const PrevEventPanel = ({ prvevents, onClose }) => {
  const [isOpen, setIsOpen] = useState(true); // State to control the visibility of the panel

  const handlePanelClose = () => {
    console.log('Prev Event panel closed');
    setIsOpen(false); // Set isOpen state to false when the close button is clicked
    onClose && onClose(); // Call the onClose function without any parameters
  };

  return (
    <>
      {isOpen && (
        <div>
          {Object.entries(prvevents).map(([selectedDay, event]) => (
            <div key={selectedDay} className="prvevent-panel">
              <button className="close-button" onClick={handlePanelClose}>Close</button>
              <h3 className='primary-heading'>Event Details on {selectedDay}</h3>
              <p>{event.details}</p>
              {event.image && (
                <div>
                  <img src={event.image} alt='' />
                </div>
              )}
              <button className='primary-button3'>More Details</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PrevEventPanel;
