import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import detailStyles from './singlerecipe.module.css';
import Review from '../../components/Review';

import { useQuery } from "@apollo/client";
import { QUERY_RECIPE_ID } from '../../utils/queries';

function SingleRecipe() {

    // const recipe = {
    //     "recipeTitle" : "Chicken Parm",
    //     "description" : "This is a great chicken dish",
    //     "author" : "Emma",
    //     "img" : "https://placekitten.com/400/200",
    //     "ingredients" : ["chicken", "parmesan", "tomato sauce", "pasta"],
    //     "preperationStep" : ["1: do this", "2: to this second", "3: do this third"],
    //     "tag": []
    // }

    // query database for single recipe
    
    const { error, loading, data } = useQuery(QUERY_RECIPE_ID, {
        variables: { id: "62eecc95846969b8e564065a" }
    });
    
    const { recipeTitle, _id, description, ingredient, img, preperationStep } = data?.recipe || [];
    // console.log('RECIPE DATA', recipe);

  // implement state to keep track of which recipe has been selected to review
  const [currentRecipe, setCurrentRecipe] = useState({ title: `${recipeTitle}`, _id: `${_id}` });

  // implement state to set star rating
  const [value, setValue] = useState();

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
        <section className={detailStyles.main}>
            {/* <Header /> */}
            <Grid className={detailStyles.container} container spacing={2}>

                {/* recipe title always takes up full 12 columns */}
                <Grid item xs={12}>
                    <Item>
                        {/* <Typography variant="h2">{recipe.recipeTitle}</Typography> 
                        <Typography variant="h3">{recipe.description}</Typography> */}
                        <h2>{recipeTitle}</h2>
                        <h3>{description}</h3>
                    </Item>
                </Grid>

                {/* recipe image */}
                <Grid item xs={12} md={6} lg={4}>
                    <Item>
                        <img src={img} alt="finished recipe"></img>
                    </Item>
                </Grid>

                <Grid item xs={12} md={6} lg={8}>
                    <Item>
                        <h4>Ingredients</h4>
                        <ul>
                        {ingredient.map(ingredient => {
                            return (
                                <li>{ingredient}</li>
                            )})}
                        </ul>
                    </Item>
                </Grid>

                <Grid item xs={12}>
                    <Item>
                        <h4>Instructions</h4>
                        <ol>
                            {preperationStep.map(step => {
                                return (
                                    <li>{step}</li>
                                )
                            })}
                        </ol>
                    </Item>
                </Grid>

                {/* REVIEW SECTION */}
                <Grid item xs={12} lg={4}>
                    <Item>
                        <Review
                            value={value}
                            setValue={setValue}
                            currentRecipe={currentRecipe}
                        ></Review>
                    </Item>
                </Grid>

                <Grid item xs={12} lg={8}>
                    <Item>reviews</Item>
                </Grid>


            </Grid>
            {/* <Footer /> */}
        </section>
    )
}

export default SingleRecipe;