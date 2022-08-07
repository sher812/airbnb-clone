import React from "react";

export default function Card(props) {
    return(
        <div className="card">
            <img className="profile-pic" src={props.img} alt={props.name}/>
            <span className="rating">
                <img src="../images/star.svg" alt="star"/>
                <p><b> {props.rating} </b></p>
                <p> {props.location} </p>
            </span>
            <span className="details">
                <p> {props.description} </p>
                <p><b>From ${parseInt(props.pricing)} /</b> person</p>
            </span>
        </div>
    );
}