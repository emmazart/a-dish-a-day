import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import dashStyles from './dashboard.module.css';
import SecondaryNav from '../../components/SecondaryNav';
import Footer from '../../components/Footer';
import FavoriteRecipe from '../../components/FavoriteRecipe';

const Dashboard = () => {

    const recipes = [
        {
            id: 1,
            recipeTitle: "Chicken Parm",
            description: "This is a great chicken dish",
            author: "Emma",
            img: "https://placekitten.com/400/200",
            ingredient: ["chicken", "parmesan", "tomato sauce", "pasta"],
            preprationStep: ["1: do this", "2: to this second", "3: do this third"],
            tag: ["Chicken"]
        },
        {
            id: 2,
            recipeTitle: "Chicken Parm",
            description: "This is a great chicken dish",
            author: "Emma",
            img: "https://placekitten.com/400/200",
            ingredient: ["chicken", "parmesan", "tomato sauce", "pasta"],
            preprationStep: ["1: do this", "2: to this second", "3: do this third"],
            tag: ["Chicken"]
        },
        {
            id: 3,
            recipeTitle: "Chicken Parm",
            description: "This is a great chicken dish",
            author: "Emma",
            img: "https://placekitten.com/400/200",
            ingredient: ["chicken", "parmesan", "tomato sauce", "pasta"],
            preprationStep: ["1: do this", "2: to this second", "3: do this third"],
            tag: ["Chicken"]
        }
    ]

    // implement state to keep track of which recipe has been selected to review
    const [currentRecipe, setCurrentRecipe] = useState({ title: '' });

    const handleSubmitReview = (e) => {
        e.preventDefault();
        console.log('submitted');
    };

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
                                <h2>Review recipe</h2>
                                <TextField
                                    name="reviewText"
                                    required
                                    fullWidth
                                    multiline
                                    rows={4}
                                    id="reviewText"
                                    label="Your review here"
                                    autoFocus
                                />
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