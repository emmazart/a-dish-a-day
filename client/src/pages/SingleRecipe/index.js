import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import detailStyles from './singlerecipe.module.css';
import ReviewForm from '../../components/ReviewForm';
import Review from '../../components/Review';

import { useQuery } from "@apollo/client";
import { QUERY_RECIPE_ID } from '../../utils/queries';

function SingleRecipe() {

    // HARDCODED DATA FOR DEVELOPMENT PROCESS

    // const { recipeTitle, _id, description, ingredient, img, preparationStep } = {
    //     "recipeTitle" : "Chicken Parm",
    //     "description" : "This is a great chicken dish",
    //     "author" : "Emma",
    //     "img" : "https://placekitten.com/400/200",
    //     "ingredient" : ["chicken", "parmesan", "tomato sauce", "pasta", "basil", "mozarella"],
    //     "preparationStep" : ["do this", "to this second", "do this third"],
    //     "tag": [],
    //     "_id": 5
    // };

    // const reviewData = [
    //     {
    //         "text": "wow this is such a great recipe I love it so much 5 stars",
    //         "username": "Emma",
    //         "starRating": 5
    //     },
    //     {
    //         "text": "wow this is such a great recipe I love it so much 5 stars",
    //         "username": "Emma",
    //         "starRating": 5
    //     },
    //     {
    //         "text": "wow this is such a great recipe I love it so much 5 stars",
    //         "username": "Emma",
    //         "starRating": 5
    //     }
    // ];
    
    // retrieve recipe id for query from url 
    const URL = window.location.href;
    const selectedRecipeId = URL.substr(30);

    // query database for single recipe using id
    const { error, loading, data } = useQuery(QUERY_RECIPE_ID, {
        variables: { id: selectedRecipeId }
    });
        
    // destructure returned data into necessary keys
    const { recipeTitle, _id, description, author, ingredient, img, preparationStep, review } = data?.recipe || [];
    console.log('RECIPE DATA', recipeTitle, _id);

    // implement state to keep track of which recipe has been selected to review
    const [currentRecipe, setCurrentRecipe] = useState({ title: '', _id: '' });

    // re-render page when data changes & set current recipe to the new title and id
    useEffect(() => {
        if (!data) return console.log('no data');
        setCurrentRecipe({
            title: recipeTitle,
            _id: _id
        });
      }, [data])

    // implement state to set star rating
    const [value, setValue] = useState();

    // Item component styling from MUI
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const getImgPath = i => {
        return `${process.env.PUBLIC_URL}/${i}`
    }

    // error handling for query
    if (loading) return "loading"
    if (error) return <pre>{error.message}</pre>  

    // returned JSX
    return (
        <section className={detailStyles.main}>
            <Header />
            <Grid className={detailStyles.container} container spacing={2}>

                {/* recipe title always takes up full 12 columns */}
                <Grid item xs={12}>
                    <Item>
                        <h2>{recipeTitle}</h2>
                        <p>by {author}</p>
                        <h3>{description}</h3>
                    </Item>
                </Grid>

                {/* IMAGE */}
                <Grid item xs={12} md={6} lg={4}>
                    <Item className={detailStyles.imgContainer}>
                        <img className={detailStyles.img} src={getImgPath(img)} alt="finished recipe"></img>
                    </Item>
                </Grid>

                {/* INGREDIENTS */}
                <Grid item xs={12} md={6} lg={7}>
                    <Item>
                        <h4>Ingredients</h4>
                        <ul className={detailStyles.ingredients}>
                        {ingredient.map((ingredient, index) => {
                            return (
                                <li key={index}>{ingredient}</li>
                            )})}
                        </ul>
                    </Item>
                </Grid>

                {/* INSTRUCTIONS */}
                <Grid item xs={12}>
                    <Item className={detailStyles.stepContainer}>
                        <h4 className={detailStyles.stepHeader}>Instructions</h4>
                        <ul className={detailStyles.steps}>
                            {preparationStep.map((step, index) => {
                                return (
                                    <li key={index}>{step}</li>
                                )
                            })}
                        </ul>
                    </Item>
                </Grid>

                {/* REVIEW SECTION - FORM AND REVIEWS FROM DB */}
                <Grid item xs={12} lg={4}>
                    <Item>
                        <ReviewForm
                            value={value}
                            setValue={setValue}
                            currentRecipe={currentRecipe}
                        ></ReviewForm>
                    </Item>
                </Grid>

                <Grid item xs={12} lg={8}>
                <Item>
                {review.length < 1 ? <h4>Be the first to review!</h4> : <h4>Reviews</h4>}
                {review.map((review, index) => {
                    return (
                        <Review 
                        key={index}
                        text={review.reviewText}
                        value={review.rating}
                        user={review.username}
                        ></Review>             
                    )
                })}
                </Item>
                </Grid>
            </Grid>
            <Footer className={detailStyles.footer} />
        </section>
    )
}

export default SingleRecipe;