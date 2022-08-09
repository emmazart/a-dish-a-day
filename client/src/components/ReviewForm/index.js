import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import reviewStyles from './review.module.css';

function Review(props) {

    const { currentRecipe, value, setValue } = props;

    const labels = {
        0: 'Terrible',
        1: 'Bad',
        2: 'Poor',
        3: 'Decent',
        4: 'Very Good',
        5: 'Delicious!',
    };

    // rerender page when value is changed
    useEffect(() => {
        console.log(value)
    }, [value]);

    const handleSubmitReview = (e) => {
        e.preventDefault();

        // post request to db 
        // {
        //     _id: {currentRecipe._id},
        //     user: {}
        //     reviewText: {},
        //     reviewStars: {value}
        // }

        console.log('submitted');
    };

  return (
    <Box
      className={reviewStyles.form}
      component="form"
      onSubmit={handleSubmitReview}
      noValidate
      sx={{ mt: 3 }}
    >
      {currentRecipe.title ? (
        <h2>
          Write a review for <br /> {currentRecipe.title}
        </h2>
      ) : (
        <h2>Write a review!</h2>
      )}
      <TextField
        name="reviewText"
        required
        fullWidth
        multiline
        rows={4}
        id="reviewText"
        // label="Your review here"
        placeholder="Your review here"
        autoFocus
      />
      <Rating
        className={reviewStyles.rating}
        size="large"
        name="simple-controlled"
        value={value ?? 0}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
      <Button className={reviewStyles.btn} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Submit
      </Button>
    </Box>
  );
}

export default Review;
