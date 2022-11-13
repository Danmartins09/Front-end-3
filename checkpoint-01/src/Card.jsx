import React from "react";

const Card = ({ formData }) => {
  {
    console.log("formData: " + formData[1]);
  }
  return (
    <div className="card" style={{ background: formData[1] }}>
      <div className="cardInfo">
        <p>{formData[0]}</p>
        <p className="colorText">{formData[1]}</p>
      </div>
    </div>
  );
};

export default Card;
