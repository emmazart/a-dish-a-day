<<<<<<< HEAD
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import dashStyles from './dashboard.module.css';
import Footer from '../../components/Footer';
import FavoriteRecipe from '../../components/FavoriteRecipe';
import Header from '../../components/Header';
import { Typography } from '@mui/material';
=======
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import dashStyles from "./dashboard.module.css";
import SecondaryNav from "../../components/SecondaryNav";
import Footer from "../../components/Footer";
import FavoriteRecipe from "../../components/FavoriteRecipe";

import Review from "../../components/ReviewForm";
import { useQuery } from "@apollo/client";
import { QUERY_RECIPES } from "../../utils/queries";
>>>>>>> 8b9814dc1d9815a8d3ce931f1637ff4c43ac75b0

const Dashboard = () => {
  // implement state to keep track of which recipe has been selected to review
  const [currentRecipe, setCurrentRecipe] = useState({ title: "", _id: "" });

  // implement state to set star rating
  const [value, setValue] = useState();

  const { loading, data } = useQuery(QUERY_RECIPES);
  const recipes = data?.recipes || [];

  // const recipes = [
  //     {
  //         _id: 1,
  //         recipeTitle: "Chicken Parm",
  //         description: "This is a great chicken dish",
  //         author: "Emma",
  //         img: "https://placekitten.com/400/200",
  //         ingredient: ["chicken", "parmesan", "tomato sauce", "pasta"],
  //         preprationStep: ["1: do this", "2: to this second", "3: do this third"],
  //         tag: ["Chicken"]
  //     },
  //     {
  //         _id: 2,
  //         recipeTitle: "Chicken Parm",
  //         description: "This is a great chicken dish",
  //         author: "Emma",
  //         img: "https://placekitten.com/400/200",
  //         ingredient: ["chicken", "parmesan", "tomato sauce", "pasta"],
  //         preprationStep: ["1: do this", "2: to this second", "3: do this third"],
  //         tag: ["Chicken"]
  //     },
  //     {
  //         _id: 3,
  //         recipeTitle: "Chicken Parm",
  //         description: "This is a great chicken dish",
  //         author: "Emma",
  //         img: "https://placekitten.com/400/200",
  //         ingredient: ["chicken", "parmesan", "tomato sauce", "pasta"],
  //         preprationStep: ["1: do this", "2: to this second", "3: do this third"],
  //         tag: ["Chicken"]
  //     }
  // ];

  return (
    <div className={dashStyles.test}>
      <SecondaryNav></SecondaryNav>
      <h2>Dashboard</h2>
      <main className={dashStyles.main}>
        {/* Recent recipes */}
        <section className={dashStyles.recipeContainer}>
          {recipes.map((recipe, index) => {
            return (
              <FavoriteRecipe
                key={index}
                source={recipe.img}
                title={recipe.recipeTitle}
                _id={recipe._id}
                author={recipe.author}
                description={recipe.description}
                currentRecipe={currentRecipe}
                setCurrentRecipe={setCurrentRecipe}
              ></FavoriteRecipe>
            );
          })}
        </section>

        {/* Review section */}
        <section className={dashStyles.formContainer}>
          <Review
            value={value}
            setValue={setValue}
            currentRecipe={currentRecipe}
          ></Review>
        </section>
      </main>
      <Footer />
    </div>
  );
};

<<<<<<< HEAD
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
        <div className={dashStyles.test}>
            <Header></Header>
            <Typography
                variant='h4'
                color='textPrimary'
                align='center'
                margin='140px 0px 50px 0px'
            >
                Dashboard
            </Typography>
                <main className={dashStyles.main}>

                        {/* Recent recipes */}
                        <section className={dashStyles.recipeContainer}>
                            {recipes.map((recipe, index) => {
                                return (
                                    <FavoriteRecipe
                                    key={index}
                                    source={recipe.img}
                                    title={recipe.recipeTitle}
                                    _id={recipe._id}
                                    author={recipe.author}
                                    description={recipe.description}
                                    currentRecipe={currentRecipe}
                                    setCurrentRecipe={setCurrentRecipe}
                                    >
                                    </FavoriteRecipe>
                                )
                            })}
                                
                        </section>

                        {/* Review section */}
                        <section className={dashStyles.formContainer} >
                            <Box className={dashStyles.form} component="form" onSubmit={handleSubmitReview} noValidate sx={{ mt: 3 }}>
                                {currentRecipe.title ?
                                <h2>Write a review for <br /> {currentRecipe.title}</h2> :
                                <h2>Write a review!</h2>
                                }
                                <TextField
                                    name="reviewText"
                                    required
                                    fullWidth
                                    multiline
                                    rows={4}
                                    id="reviewText"
                                    // label="Your review here"
                                    placeholder='Your review here'
                                    autoFocus
                                />
                                <Rating
                                className={dashStyles.rating}
                                size="large"
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                />
                                <Box sx={{ ml: 2 }}>{labels[value]}</Box>
                                <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                >
                                Submit
                                </Button>
                            </Box>
                        </section>
                </main>
            <Footer />
        </div>
    )
}

export default Dashboard;
=======
export default Dashboard;
>>>>>>> 8b9814dc1d9815a8d3ce931f1637ff4c43ac75b0
