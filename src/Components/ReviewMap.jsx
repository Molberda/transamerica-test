import React from 'react';
import Rating from './Rating';

const ReviewMap = ({ item }) => {
    return (
        <div className="review">
            <h3 className="review__name">{item.name}</h3>
            <p className="review__description">{item.description}</p>
            <Rating rating={item.rating}/>
        </div>
    );
}

export default ReviewMap;
