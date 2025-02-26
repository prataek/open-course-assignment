import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import homeImage from "../assets/sarah-dorweiler-gIx3YO42hpM-unsplash.jpg";
import "../styles/home.css";

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>Home | OpenCourse</title>
            <meta name="description" content="Learn from top university content including MIT, Stanford, and Harvard for free." />
            <meta name="keywords" content="EdTech, Free Courses, Online Learning, Open Course, MIT, Stanford, Harvard" />
            <meta name="author" content="Open Course" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="/home"/>
         </Helmet>
         <div className = "home-div" style={{ backgroundImage: `url(${homeImage})`}}>
            <div className="hero-section">
               <h1 className="home-title">
                  Welcome to Open Course
               </h1>
               <p id="h2">Unlock your potential</p>
               <p className="home-desc">
                  Access high-quality courses from top universities like MIT, Stanford, and Harvard, completely free.
               </p>
               <button className="home-surf">
                  <Link className = "link-family" to = "/courses"> Explore Courses </Link>
               </button>
            </div>
         </div>
      </div>
   );
};

export default Home;