import React from 'react';
import ReviewMap from '../Components/ReviewMap';

const Reviews = ({ reviews }) => {
    return (
        <section id="reviews">
            <div className="container reviews__container">
                <div className="row reviews__row">
                    <h1 className="section__title reviews__title">Reviews</h1>
                    <div className="reviews__organizer">
                        {reviews.map((item) => <ReviewMap key={item.id} item={item}/>)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;
