import React from "react";
import "./Cards.css";

const Cards = props => (
    <div onClick={() => props.check(props.id)} className="card">
        <div className="img-container">
            <img alt={props.id} src={props.image} />
        </div>
    </div>
);

export default Cards;
