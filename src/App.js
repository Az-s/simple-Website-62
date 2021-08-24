import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
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
          <Navbar bg="dark" variant="dark" sticky='top'>
            <Container>
              <Navbar.Brand><NavLink to='/'>Travel</NavLink></Navbar.Brand>
              <Nav className="me-auto">
                <NavLink to='/' exact activeStyle={{ color: '#4e5559' }}>Home</NavLink>
                <NavLink to='/video' exact activeStyle={{ color: '#4e5559' }}>Video</NavLink>
                <NavLink to='/services' exact activeStyle={{ color: '#4e5559' }}>Services</NavLink>
                <NavLink to='/blog' exact activeStyle={{ color: '#4e5559' }}>Blog</NavLink>
              </Nav>
              <Nav>
                <NavLink to='/about' exact activeStyle={{ color: '#4e5559' }}>About Us</NavLink>
              </Nav>
            </Container>
          </Navbar>

          {/* <NavBar />  вариант через bootstrap не уверен что годится именно под это задание(каждая страница перезагружается)*/}

          <Route exact path='/' component={MainContent} />
          <Route path='/video' component={Video} />
          <Route path='/services' component={Services} />
          <Route path='/blog' component={Blog} />
          <Route path='/about' component={AboutUs} />
          <Footer />
        </Router>
    </div>
  );
}

export default App;
