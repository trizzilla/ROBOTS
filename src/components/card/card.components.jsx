import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="meow"
      src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`}
    />
    <h3>{props.monster.name}</h3>
    <h5>{props.monster.username}</h5>
    <p>{props.monster.email}</p>
  </div>
);
