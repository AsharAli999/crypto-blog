import React from "react";
// import Home from './Home';
// import Service from './Service';
// import Contact from './Contact';
// import About from './About';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import PostCard from "./components/RecentPosts/PostCard";
import RecentPosts from "./components/RecentPosts/RecentPosts";

function App() {
  return (

    <>

      <Router>
      <Navbar/>
      <HeroSection/>
      <RecentPosts/>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>

      </Router>

    </>

  );
}

export default App;