import React from "react";
import imageGrid from "../images/photo-grid.svg";
function Hero() {

    return(
        <div className="hero">
            <img src={imageGrid} alt="image-grid" className="image-grid" />
            <span className="hero-text">
                <h1> Online Experiences </h1>
                <p>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </span>
        </div>
    );
}

export default Hero;