import React from "react";

export default function Card(props) {
    let badgeText = "";

    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }

    return(
        <div className="card">
            {badgeText !== "" && <div className="sold-out-btn"> {badgeText} </div>}
            <img className="profile-pic" src={`./images/${props.coverImg}`} alt={props.coverImg}/>
            <span className="rating">
                <img src="../images/star.svg" alt="star"/>
                <p><b> {props.rating} </b></p>
                <p> ({props.reviewCount}) {props.location} </p>
            </span>
            <span className="details">
                <p> {props.title} </p>
                <p><b>From ${props.price} /</b> person</p>
            </span>
        </div>
    );
}