import React from 'react';
import FooterImg from "../../assets/footer-svg.svg";
import { FiLinkedin, FiInstagram } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineSlack } from "react-icons/ai";
import "./footer.css";

function Footer() {
  return (
    <footer className='section footer'>
      <div className="footer-container">

        
        <div className="footer-head">
          <h3>Lets go Dude ! </h3>
          <a className='footer-btn' href="#">Sign Up</a>
        </div>


        <div className="footer-content">
          <div className="footer-links">
            <img src={FooterImg} alt="Footer logo" />
            <ul className='menu-item'>
              {['About Us', "What's New", 'Careers', 'Affiliate Program', 'Help Center'].map((item) => (
                <li key={item}><a href="#">{item}</a></li>
              ))}
            </ul>
            <ul className='social-icons'>
              {[FiLinkedin, FiInstagram, ImFacebook, FaTwitter, AiOutlineSlack].map((Icon, index) => (
                <li key={index}><a href="#"><Icon className='icons-style' /></a></li>
              ))}
            </ul>
          </div>
          <div className="footer-links-block">
            {footerColumns.map((column) => (
              <div key={column.title} className="footer-col-one">
                <h4>{column.title}</h4>
                <ul className='link-block'>
                  {column.links.map((link) => (
                    <li key={link}><a href="#">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="footer-end">
          <ul className='footer-end-links'>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
          <div className="copy-write">
            © 2023 Uxcel, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerColumns = [
  {
    title: "For Individuals",
    links: ["Learn UX Design", "UX Skills Assessments", "Professional UX Certifications", "Design Challenges", "Pro Membership", "UX Job Board", "Pricing"]
  },
  {
    title: "For Teams",
    links: ["Team Learning", "Screening Assessments", "Hire Designers", "Curated Recruitment", "Customer Stories", "Team Pricing"]
  },
  {
    title: "Resources",
    links: ["Blog", "Guides", "Learner Stories", "Salary Explorer", "UX Design Glossary"]
  },
  {
    title: "Popular Courses",
    links: ["UX Design Foundations course", "UI Components I course", "Common Design Patterns course", "UX Research course", "UX Writing course", "View All"]
  },
  {
    title: "Popular Assessments",
    links: ["Figma assessment", "Verified Designer assessment", "Accessibility assessment", "Interaction design assessment", "Research assessment", "View All"]
  },
  {
    title: "Popular Challenges",
    links: ["Heuristic Analysis", "Wireframe", "Color palette", "Wireflow", "Interview Skills", "View All"]
  }
];

export default Footer;