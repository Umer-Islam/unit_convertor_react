import React from "react";

function UnitCard(props) {
  function handleClick() {
    let value = props.value;
    console.log(value);
  }
  return (
    <>
      <div className="card" onClick={handleClick}>
        <h2>{props.title}</h2>
        <p>{props.equilance}</p>
      </div>
    </>
  );
}

export default UnitCard;
