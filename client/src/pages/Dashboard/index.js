import React from 'react';
import Button from '@mui/material/Button';
import dashStyles from './dashboard.module.css';
import SecondaryNav from '../../components/SecondaryNav';
import Recipe from '../../components/Recipe';
import Footer from '../../components/Footer';

const Dashboard = () => {

    const recipes = [
        {
            recipeTitle: "Chicken Parm",
            description: "This is a great chicken dish",
            author: "Emma",
            img: "https://placekitten.com/400/200",
            ingredient: ["chicken", "parmesan", "tomato sauce", "pasta"],
            preprationStep: ["1: do this", "2: to this second", "3: do this third"],
            tag: ["Chicken"]
        },
        {
            recipeTitle: "Chicken Parm",
            description: "This is a great chicken dish",
            author: "Emma",
            img: "https://placekitten.com/400/200",
            ingredient: ["chicken", "parmesan", "tomato sauce", "pasta"],
            preprationStep: ["1: do this", "2: to this second", "3: do this third"],
            tag: ["Chicken"]
        },
        {
            recipeTitle: "Chicken Parm",
            description: "This is a great chicken dish",
            author: "Emma",
            img: "https://placekitten.com/400/200",
            ingredient: ["chicken", "parmesan", "tomato sauce", "pasta"],
            preprationStep: ["1: do this", "2: to this second", "3: do this third"],
            tag: ["Chicken"]
        }
    ]

    return (
        <div className={dashStyles.test}>
            <SecondaryNav></SecondaryNav>
            <h2>Dashboard</h2>
                <main className={dashStyles.main}>

                        {/* Recent recipes */}
                        <section>
                            {recipes.map((recipe, index) => {
                                return (
                                    <card key={index}>
                                        <img src={recipe.img}></img>
                                        <h2>{recipe.recipeTitle}</h2>
                                        <p>{recipe.description}</p>
                                    </card>
                                )
                            })}
                                
                        </section>

                        {/* Review section */}
                        <section>
                            <form>
                                <h2>Review this recipe</h2>
                                <textarea></textarea>
                                <Button>Submit</Button>
                            </form>
                        </section>
                </main>
            <Footer />
        </div>
    )
}

export default Dashboard;