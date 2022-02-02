import React from 'react';
import {Routes, Route} from 'react-router-dom'  // For routing...

import Event from './container/event';  // Importing all pages from here...
import Booking from './container/booking';
import Payment from './container/payment';

import './App.css';  // Css file for App.js


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Event/>}/>   {/* Syntex in react-router-dom updated versions */}
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
    </div>
  );
}

export default App;
