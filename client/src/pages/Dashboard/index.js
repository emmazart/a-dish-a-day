
import React, { useState, useEffect } from "react";
import dashStyles from "./dashboard.module.css";
import SecondaryNav from "../../components/SecondaryNav";
import Footer from "../../components/Footer";
import FavoriteRecipe from "../../components/FavoriteRecipe";
import Review from "../../components/ReviewForm";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_RECIPES, QUERY_FAVORITES } from "../../utils/queries";
import { Typography } from "@mui/material";
import Auth from "../../utils/auth";

const Dashboard = () => {
  // implement state to keep track of which recipe has been selected to review
  const [currentRecipe, setCurrentRecipe] = useState({ title: "", _id: "" });

  // implement state to set star rating
  const [stars, setStars] = useState();

  console.log("HERE");
  // const [state, dispatch] = useUserContext();
  let id_token = localStorage.getItem('id_token');
  const user = Auth.getProfile(id_token);
  const id = user.data._id;
  console.log(user);

  const { error, loading, data } = useQuery(QUERY_FAVORITES, {
    variables: { id: id }
  });

  useEffect(() => {
    if (!data) return
    console.log('re-rendering for new data')
  }, [data])

  if (loading) return "loading"
  if (error) return <pre>{error.message}</pre>

  const recipes = data?.userFavorites.favorite || [];

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
    <div>
      <SecondaryNav></SecondaryNav>
      <Typography
                variant='h4'
                color='textPrimary'
                align='center'
                margin='140px 0px 0px 0px'
            >
                Dashboard
            </Typography>
      <main className={dashStyles.main}>
        {/* Recent recipes */}
        <section className={dashStyles.recipeContainer}>
        <h2
                className={dashStyles.header}
            >
                Favorited Recipes
                </h2>
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
            stars={stars}
            setStars={setStars}
            currentRecipe={currentRecipe}
          ></Review>
        </section>
      </main>
      <Footer />
    </div>
  );
};



export default Dashboard;
