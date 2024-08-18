import React, { useState } from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.svg";
import BannerVideo from "../Assets/birdseye.mp4";
import event1 from "../Assets/event1.jpg";
import event2 from "../Assets/event2.jpg";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    // State to control visibility of upcoming events
    const [isUpcomingEventsOpen, setIsUpcomingEventsOpen] = useState(false);

    // Function to handle opening of upcoming events section
    const handleOpenUpcomingEvents = () => {
        setIsUpcomingEventsOpen(true);
    };

    // Function to handle closing of upcoming events section
    const handleCloseUpcomingEvents = () => {
        setIsUpcomingEventsOpen(false);
    };

    // Upcoming events data
    const upcomingEvents = {
        '2024-4-23': {
            title: 'Special Event on April 23, 2024',
            image: event1,
            details: 'Hey Fellas 👋\nWe are back for you to walk you through a intriguing engineering experience. 🛠️\nLICET Pattarai brings you CarpeDiem - The LICET Hackathon. The 24 hour hackathon exclusively for the First and Second year students of LICET in our campus.',
        },
        '2024-4-24': {
            title: 'Special Event on April 24, 2024',
            image: event2,
            details: 'Healing Hues by the Rotaract Club of LICET.God bless our Youth who are dedicated in selfless services! A special event was conducted by the LICET Rotaract in my Egmore Ward 61.About 20 students went to the Childrens hospital at my Egmore Ward for 2 days and painted the walls with their beautiful innovative ideas to make it colorful for the children admitted undergoing treatment.',
        },
    };

    return (
    <div className="home-container">
        <Navbar/>
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="" />
            </div>
            <div className="home-text-section">
                <h1 className="primary-heading">
                    LICET Events
                </h1>
                <p className="primary-text">
                LICET – a centre of global learning, is an academic collaboration between Loyola College Society (LCS) 
                and Institut catholique d’arts et métiers (ICAM), France and guided by the Jesuit pedagogy of education.
                 Here, students are formed as leaders with social responsibilities.
                </p>
                {/* Button to toggle upcoming events section */}
                <button className="secondary-button" onClick={handleOpenUpcomingEvents}>
                    Upcoming Events <FiArrowRight/>
                </button>
            </div>
            <div className="home-video-container"> {/* Added container */}
                    <video className="home-video" controls autoPlay loop muted> {/* Added video element */}
                        <source src={BannerVideo} type="video/mp4" /> {/* Added video source */}
                        Your browser does not support the video tag.
                    </video>
                </div>
        </div>
        {/* Conditionally render upcoming events section */}
        {isUpcomingEventsOpen && (
            <div className="upcoming-events-container">
                {/* Render upcoming events here */}
                {Object.entries(upcomingEvents).map(([date, event]) => (
                    <div key={date} className="upcoming-event">
                        <h3 className="primary-heading">{event.title}</h3>
                        <img src={event.image} alt="" />
                        <p>{event.details}</p>
                        <button className='primary-button3'>More Details</button>
                    </div>
                ))}
                {/* Button to close upcoming events section */}
                <button className="close-button" onClick={handleCloseUpcomingEvents}>Close</button>
            </div>
        )}
    </div>
    );
}

export default Home;
