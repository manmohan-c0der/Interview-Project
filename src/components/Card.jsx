import React from "react";

const Card = ({ title, description, date, image }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
        <button className="close-btn">✕</button>
      </div>
      <p className="description">{description}</p>
      <p className="date">{date}</p>
      <img src={image} alt="Card" className="card-image" />
    </div>
  );
};

export default Card;
