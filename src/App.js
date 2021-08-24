import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Video from './components/Video';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className='navbar'>
          <li><NavLink to='/'>home</NavLink></li>
          <li><NavLink to='/video'>video</NavLink></li>
          <li><NavLink to='/services'>services</NavLink></li>
          <li><NavLink to='/blog'>services</NavLink></li>
          <li><NavLink to='/about'>services</NavLink></li>
        </div>

        <NavBar />
        <Route exact path='/' component={MainContent} />
        <Route path='/video' component={Video} />
        <Route path='/services' component={Services} />
        <Route path='/blog' component={Blog} />
        <Route path='/about' component={AboutUs} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
