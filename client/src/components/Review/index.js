import React from 'react';
import Rating from '@mui/material/Rating';
import reviewStyles from './review.module.css';

function Review(props) {

    const { text, user, value } = props;

    return (
        <div className={reviewStyles.container}>
            <Rating
                className={reviewStyles.rating}
                size="large"
                name="simple-controlled"
                value={value}
            />
            <p>{text}</p>
            <p>by {user}</p>
        </div>
    )
}

export default Review;