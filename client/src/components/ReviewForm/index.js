import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import reviewStyles from './review.module.css';
import { useMutation } from "@apollo/client";
import { ADD_REVIEW } from '../../utils/mutations';

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

      // USE MUTATION
      const [addReview, { error }] = useMutation(ADD_REVIEW);

      // USE STATE TO CAPTURE FORM TEXT VALUE
      const [reviewText, setReviewText] = useState("");

      const handleText = (e) => {
        setReviewText(e.target.value)
      };

      // SUBMIT REVIEW HANDLER QUERIES DB
      const handleSubmitReview = async event => {
        event.preventDefault();
        let token = localStorage.getItem('id_token');
        console.log(value, reviewText, currentRecipe._id);

        try {
          // destructured 'data' because that's what's being returned from addUser query in Apollo
          const data = await addReview({
            variables: {
              "reviewText": `${reviewText}`,
              "rating": `${value}`,
              "id": `${currentRecipe._id}`
            }
          });

          console.log("review submitted", data);
          
        } catch (e) {
          console.log(e);
        }
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
        onBlur={handleText}
        id="reviewText"
        // label="Your review here"
        placeholder="Your review here"
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
