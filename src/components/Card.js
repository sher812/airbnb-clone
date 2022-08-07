import React from "react";

export default function Card(props) {
    return(
        <div className="card">
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