import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Block from './components/InfoBlock/InfoBlock';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Block />
      <AboutUs />
      
    </div>
  );
}

export default App;
