import React from "react";
import './App.css';

export default function Alldata(props) {
  return (
    <div className="store">
      <img src={props.pic} alt="image" className="img" />
      <h2>{props.send}</h2>
      <h3>${props.money}</h3>
      <button className="button" onClick={() => props.count( props)}>

        Add to cart
      </button>
    </div>
  );
}
