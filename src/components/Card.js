import React from "react";

export default function Card({item}) {
    let badgeText = "";

    if (item.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (item.location === "Online") {
        badgeText = "ONLINE";
    }

    return(
        <div className="card">
            {badgeText !== "" && <div className="sold-out-btn"> {badgeText} </div>}
            <img className="profile-pic" src={`./images/${item.coverImg}`} alt={item.coverImg}/>
            <span className="rating">
                <img src="../images/star.svg" alt="star"/>
                <p><b> {item.stats.rating} </b></p>
                <p> ({item.stats.reviewCount}) {item.location} </p>
            </span>
            <span className="details">
                <p> {item.title} </p>
                <p><b>From ${item.price} /</b> person</p>
            </span>
        </div>
    );
}