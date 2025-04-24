import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import Services from "./pages/Services";
import Timetable from "./pages/Timetable";
import Trainers from "./pages/Trainers";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Buy from "./pages/Buy";
import Login from "./pages/Login";
// import HeroSection from "./components/HeroSection";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Join from "./pages/Join";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="mt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/join" element={<Join />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer/>
      </div>
      
    </Router>
  );
}

export default App;
