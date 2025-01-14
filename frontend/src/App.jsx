import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Banner from './components/Banner';
import Working from './components/Working';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import Login from './components/Login'; 
import NewUser from './components/Newuser';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Working />
            <Aboutus />
            <Footer />
          </>
        } />
        <Route path="/login" element={<>
          <Login />
          <Footer/>
          <Toaster/>
        </>
      } />
        <Route path="/Newuser" element={<>
        <NewUser/>
        <Footer/>
        </>} />
      </Routes>
      <Toaster/>
    </Router>
    
  );
}

export default App;
