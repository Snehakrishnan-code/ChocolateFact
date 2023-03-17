import './App.css';
import React from 'react';
import Header from './components/Header';
import Slides from './components/Slides';
import Footer from './components/Footer';
import Quote from './components/Quote';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Outlets from './components/Outlets';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Slides />
        <Quote/>
        <Routes>
          {/* path setting for restaurant list */}
          <Route path='/' element={<Outlets/>}/>
          
          {/* path setting for view each item */}
          <Route path='/view-outlets/:id' element={<Outlets />}/>
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;