import React from 'react';
import Navbar from './components/Navbar/Navbar';
import BookingForm from './components/BookingForm/BookingForm';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="">
          <BookingForm />
        </div>
        <div className=""></div>
      </div>
      <Footer />
    </>
  );
}

export default App;
