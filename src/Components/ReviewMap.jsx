import React from "react";
import Rating from "./Rating";

const ReviewMap = ({ item }) => {
  return (
    <div className="review">
      <div className="review__organizer">
        <h3 className="review__name">{item.name}</h3>
        <Rating rating={item.rating} />
        <p className="review__description">{item.description}</p>
      </div>
      <figure className="review__img--wrapper">
        <img src={item.img} alt="" className="review__img" />
      </figure>
    </div>
  );
};

export default ReviewMap;
