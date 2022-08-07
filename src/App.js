import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./components/Data";

function App() {
  const dataElements = Data.map(x => {
    return(
      <Card 
        item={x}
      />
      )
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards">
        {dataElements}
      </div>
    </div>
  );
}

export default App;