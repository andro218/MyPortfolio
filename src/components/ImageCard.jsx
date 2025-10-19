import React from "react";
import "./ImageCard.css"; // CSS styles

const ImageCard = ({ image, title }) => {
  return (
    <div className="horror-card">
      <img src={image} alt={title} className="horror-image" />
      <h3 className="horror-title">{title}</h3>
    </div>
  );
};

export default ImageCard;
