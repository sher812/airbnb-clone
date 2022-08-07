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
        title={x.title}
        price={x.price}
        coverImg={x.coverImg}
        location={x.location}
        rating={x.stats.rating}
        reviewCount={x.stats.reviewCount}
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