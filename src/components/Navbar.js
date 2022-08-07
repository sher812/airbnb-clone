import React from "react";
import airbnb from "../images/airbnb.svg";

function Navbar() {
    return(
        <div className="navbar">
            <img src={airbnb} alt="airbnb" className="airbnb-logo" />
        </div>
    );
}

export default Navbar;