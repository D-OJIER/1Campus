import React from "react";
import Logo from "../Assets/LogoE2.svg";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from 'react-icons/bs';
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <BsInstagram/>
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Careers</span>
          <span>Feedback</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>044 2817 8490</span>
          <span>events@licet.ac.in</span>
          <span>admissions@licet.ac.in</span>
          <span>contact@licet.ac.in</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;