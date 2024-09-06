import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Mission from './components/Mission';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Events />
      <About />
      <Mission />
      <Footer />
    </div>
  );
}

export default App;
