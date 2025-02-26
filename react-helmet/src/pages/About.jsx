import React from "react";
import { Helmet } from "react-helmet-async";
import aboutImage from "../assets/smartworks-coworking-cW4lLTavU80-unsplash.jpg";
import "../styles/about.css";
import { Link } from "react-router-dom";

const About = () => {
   return (
      <div>
         <Helmet>
            <title>About Us | OpenCourse</title>
            <meta name="description" content="Learn more about Open Course and our mission to make education accessible to everyone." />
            <meta name="keywords" content="About Open Course, EdTech Mission, Free Learning" />
            <meta name="author" content="Open Course" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="/about"/>
         </Helmet>

         <div className="about-section">
            <div className="about-hero">
               <h1>About Open Course</h1>
               <div className="about-info">
                  <p>Open Course is a revolutionary online learning platform that brings together the world's best educational institutions and industry experts. Our mission is to provide accessible, high-quality education to learners worldwide.</p>
                  <p>We believe that education should be accessible to everyone, everywhere. Through our platform, students can access courses from prestigious universities and gain valuable skills that are relevant in today's rapidly evolving job market.</p>
               </div>
               <button className="about-button">
                  <Link className = "link-family" to = "/login">Learn more about us</Link>
               </button>
            </div>
            <div className="course-image" style={{ backgroundImage: `url(${aboutImage})` }}></div>
         </div>
      </div>
   );
};

export default About;