import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/login.css";

const Login = ({ isOpen, onClose }) => {
   if (!isOpen) return null;

   const handleOverlayClick = (e) => {
      if (e.target.classList.contains("overlay")) {
         onClose();
      }
   };

   return (
      <>
         <Helmet>
            <title>Login | OpenCourse</title>
            <meta name="description" content="Log in to Open Course and access free high-quality courses from top universities." />
            <meta name="keywords" content="Login, Open Course, Free Learning, Student Portal" />
            <meta name="author" content="Open Course" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="/login"/>
         </Helmet>

         <div className="overlay" onClick={handleOverlayClick}>
            <div className="login-dialog">
               <button className="close-btn" onClick={onClose}>✖</button>
               <h2>Sign In</h2>

               <input type="text" placeholder="Username" className="input-field" />
               <input type="password" placeholder="Password" className="input-field" />

               <button className="sign-in-btn">Sign In</button>

               <div className="divider">
                  <span>OR</span>
               </div>

               <button className="google-signin">
                  <span>Sign in with Google</span>
               </button>
            </div>
         </div>
      </>
   );
};

export default Login;
