import React from "react";

function Gihana({title, currency}){

  return (
    <div>
      <div className="flags-currency">
        <p className="flags"></p>
        <span className="currency">{currency}</span>
      </div>
      <span className="title" >{title}</span>
    </div>
  );
}

export default Gihana;
