import { gql } from '@apollo/client';

export const QUERY_TAGS = gql`
  query Tags {
    tags {
      tagName
    }
  }
`;

//query all recipes from AllRecipes
export const QUERY_ALL_RECIPES = gql`
{
  recipes {
    _id
    recipeTitle
    description
    author
    img
    ingredient
    preparationStep
    tag {
      tagName
    }
  }
}
`;

// query favorites
export const QUERY_FAVORITES = gql`
query UserFavorites($id: String!) {
  userFavorites(_id: $id) {
    _id
    username
    email
    password
    favorite {
      _id
      recipeTitle
      description
      author
      img
      ingredient
    }
  }
}
`;

//query recipe by id
export const QUERY_RECIPE_ID = gql`
query Recipe($id: String!) {
  recipe(_id: $id) {
    _id
    recipeTitle
    description
    author
    img
    ingredient
    preparationStep
    review {
      reviewText
      rating
      username
    }
  }
}
`;

// query user by id
export const QUERY_USER_ID = gql`
query User($id: String!) {
  user(_id: $id) {
    username
    email
  }
}
`;