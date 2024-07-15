import React from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import UserCalendar from './UserCalendar';
import './App.css';
import Footer from './Footer';

const App = () => {
  return (
    <div className="main-content">
      <Navbar />
      <Slider />
      <UserCalendar />
      <Footer />
    </div>
  );
};

export default App;
