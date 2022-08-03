import React from 'react'
import Navbar from "../src/components/navbar/Navbar"
import Hero from  "../src/components/hero/Hero"
import Best from "../src/components/best/Best"
import Featured from './components/featured/Featured';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Best/>
    <Featured/>
    </>  
  
  );
}

export default App;
