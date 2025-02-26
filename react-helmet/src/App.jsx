import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Login from "./pages/Login";

import "../src/styles/app.css";

const App = () => {
   return (
      <HelmetProvider>
         <Router>
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/courses" element={<Courses />} />
               <Route path="/about" element={<About />} />
               <Route path="/login" element={<LoginModal />} />
            </Routes>
         </Router>
      </HelmetProvider>
   );
};

const LoginModal = () => {
   const location = useLocation();
   const navigate = useNavigate();

   const isLoginOpen = location.pathname === "/login";
   return isLoginOpen ? <Login isOpen={true} onClose={() => navigate(-1)} /> : null;
};

export default App;
