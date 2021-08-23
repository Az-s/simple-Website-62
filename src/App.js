import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <MainContent />
        <Services />
        <AboutUs />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
