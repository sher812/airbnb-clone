import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <span className="cards">
        <Card 
          img="./images/wedding.jfif"
          name="wedding"
          rating="5.0"
          location="(6) USA"
          description="Life lessons with Katie Zaferes"
          pricing={136}
        />
        <Card 
          img="./images/biking.jfif"
          name="biking"
          rating="5.0"
          location="(6) USA"
          description="Life lessons with Katie Zaferes"
          pricing={136}
        />
        <Card 
          img="./images/kelly.png"
          name="kelly"
          rating="5.0"
          location="(6) USA"
          description="Life lessons with Katie Zaferes"
          pricing={136}
        />
      </span>

    </div>
  );
}

export default App;