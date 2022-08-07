import React from "react";
import airbnb from "../images/airbnb.svg";

function Navbar() {
    return(
        <nav className="navbar">
            <img src={airbnb} alt="airbnb" className="airbnb-logo" />
        </nav>
    );
}

export default Navbar;