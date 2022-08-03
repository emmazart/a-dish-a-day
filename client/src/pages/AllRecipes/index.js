import RecipeCard from "../../components/Recipe";
import React from 'react'

const index = () => {

    const [recipes, setRecipes] = React.useState([]);
    //const recipes = [
    //    {title, ingredients, instructions, author, imageSrc}
    //];
    // Function to fetch data from graphql
    // use setRecipes to set the returned data






    // function to search
    // when someone types in the form, filter the recipes and set them



  return (
    recipes.map((recipe, index) => {
        <RecipeCard recipe={recipe} key={index} />
    }
    
  )
}

export default index