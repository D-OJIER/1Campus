import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import clock from '../Assets/clock.png';
import CalendarImage from '../Assets/Calendar.png';
import Calendar from './Calendar';
import event1 from "../Assets/event1.jpg";
import event2 from "../Assets/event2.jpg";
import prevent1 from "../Assets/prevent1.jpg"
import PrevEventPanel from './PrevEventPanel'; // Import PrevEventPanel component

const Work = () => {
    // Define events data
    const events = {
        '2024-4-23': {
            title: 'Special Event on April 23, 2024',
            image: event1,
        },
        '2024-4-24': {
            title: 'Special Event on April 24, 2024',
            image:event2,
        },
    };

    const prvevents = {
        '2023-3-24': {
            title: 'Special Event on April 13, 2023',
            image: prevent1,
            details: 'Hey Fellas 👋We are back for you to walk you through a intriguing engineering experience. 🛠️LICET Pattarai brings you CarpeDiem - The LICET Hackathon. The 24 hour hackathon exclusively for the First and Second year students of LICET in our campus.',
        },
    };

    // State to control visibility of the event panel
    const [isEventPanelOpen, setIsEventPanelOpen] = useState(false);

    // Define onClick function to handle opening of the event panel
    const handleOpen = () => {
        setIsEventPanelOpen(true);
    };

    // Define onClose function to handle closing of the event panel
    const handleClose = () => {
        setIsEventPanelOpen(false);
        console.log('Event panel closed');
    };

    return (
        <Router>
            <div className='work-section-wrapper'>
                <div className='work-section-bottom'>
                    <button className='work-section-info' onClick={handleOpen}>
                        <img src={clock} alt='' />
                        <h2>Previous Events</h2>
                    </button>
                    <Link to="/calendar">
                        <button className='work-section-info'>
                            <img src={CalendarImage} alt='' />
                            <h2>Calendar</h2>
                        </button>
                    </Link>
                </div>
                <Routes>
                    <Route path="/calendar" element={<Calendar events={events} />} />
                </Routes>
                {isEventPanelOpen && <PrevEventPanel prvevents={prvevents} onClose={handleClose} />}
            </div>
        </Router>
    );
};

export default Work;
