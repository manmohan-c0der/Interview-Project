import React from "react";



function CardComponent({ title, description, date, image }) {
  return (
    <div className="card-component">
      <div className="card-header">
        <h5>{title}</h5>
        <MdClose className="close-icon" />
      </div>
      <p>{description}</p>
      <span className="card-date">{date}</span>
      <img src={image} alt="News" className="card-image" />
    </div>
  );
}

export default CardComponent;
