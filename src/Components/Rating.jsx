import { Star, StarHalf } from "@mui/icons-material";
import React from "react";

const Rating = ({ rating }) => {
  return (
    <div className="rating">
      {new Array(Math.floor(rating)).fill(0).map((_, index) => (
        <Star key={index} />
      ))}
      {!Number.isInteger(rating) && <StarHalf />}
    </div>
  );
};

export default Rating;
