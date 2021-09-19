import React from "react";


import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Darkmode from 'darkmode-js';




function App() {
  const options = {
    bottom: '64px', // default: '32px'
    right: '32px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.3s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: false // default: true
  }
   
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
  return ( 
    <section>
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
