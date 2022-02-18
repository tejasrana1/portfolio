import React, { useState } from 'react';
import { Route, Routes, NavLink, useLocation, Link} from "react-router-dom";
import {AnimatePresence} from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faStackOverflow} from '@fortawesome/free-brands-svg-icons'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home';
import Projects from './screens/Projects';
import Skills from './screens/Skills';
import NavBar from './components/NavBar';
import Content from './components/Content';
import Colors from './constants/Colors';


function App() {
  const location = useLocation();
  const [nav, setNav] = useState(false);
  const [menuIcon, setIcon] = useState(faBars);
  function toggleNavbar(){
    if(menuIcon === faBars)
    setIcon(faXmark)
    else
    setIcon(faBars)
    setNav(nav=> !nav);
  }
  return (
    <div className="App">
      <NavBar className={"NavBar " + (nav && "activeNav")}  styles={{
        backgroundColor: Colors.secondaryBackground,
        }}>
        <Link onClick={nav && toggleNavbar} exact className="navLink logo" to="/" >
          <img src={require('./assets/images/Tejas Rana Logo.png')} alt="Logo" height={100} width={100} />
        </Link>
        <NavLink onClick={nav && toggleNavbar} exact className="navLink" to="/about" activeClassName="active" >
          About
        </NavLink>
        <NavLink onClick={nav && toggleNavbar} exact className="navLink" activeClassName="active" to="/skills">
          Skills
        </NavLink>
        <NavLink onClick={nav && toggleNavbar} exact className="navLink" activeClassName="active" to="/projects">
          Projects
        </NavLink>
        <NavLink onClick={nav && toggleNavbar} exact className="navLink" activeClassName="active" to="/contact">
          Contact
        </NavLink>
        <div className='socialMedia'>
        <a onClick={nav && toggleNavbar} href="https://github.com/tejasrana1" target="_blank" rel='noreferrer'><FontAwesomeIcon className='socialIcons' icon={faGithub} size="2x" color='white' /></a>
        <a onClick={nav && toggleNavbar} href="https://www.linkedin.com/in/tejas-rana-124a86230/" target="_blank" rel='noreferrer'><FontAwesomeIcon className='socialIcons' icon={faLinkedin} size="2x" color='white' /></a>
        <a onClick={nav && toggleNavbar} href="https://stackoverflow.com/users/14595151/chaos" target="_blank" rel='noreferrer'><FontAwesomeIcon className='socialIcons' icon={faStackOverflow} size="2x" color='white' /></a>
        </div>
      </NavBar>
      <Content className="content" styles={{
        backgroundColor: Colors.primaryBackground,overflowX: "hidden", position: "relative",
        flex: nav? 0: 6
        }}>
      <FontAwesomeIcon icon = {menuIcon} className="menuButton" size="2x" color='white' onClick={toggleNavbar} />
        <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path = "/" element ={<Home />} />
        <Route path = "/contact" element ={<Contact />} />
        <Route path = "/about" element ={<About />} />
        <Route path = "/skills" element ={<Skills />} />
        <Route path = "/projects" element ={<Projects />} />
      </Routes>
      </AnimatePresence>
      </Content>
      
    </div>
  );
}

export default App;
