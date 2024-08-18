import React from 'react'
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/about-background-image.png"
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return(
    <div className='about-section-container'>
       <div className='about-background-image-container'>
           <img src={AboutBackground} alt=''/>
       </div>
       <div className='about-section-image-container'>
           <img src={AboutBackgroundImage} alt=''/>
       </div>
       <div className='about-section-text-container'>
           <p className='primary-subheading'>About</p>
           <h1 className='primary-heading'>
            Bro U serious????
           </h1>
           <p className='primary-text'>
            Kid this is your final warning
           </p>
           <p className='primary-text'>
            There is no turning back kid.
           </p>
           <div className='about-buttons-container'>
            <button className='secondary-button'>Learn more kid</button>
            <button className='watch-video-button'> <BsFillPlayCircleFill/> Visuals? </button>
           </div>
       </div>
    </div>
  )
}

export default About