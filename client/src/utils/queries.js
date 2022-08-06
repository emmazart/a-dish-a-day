import { gql } from '@apollo/client';

export const QUERY_RECIPES = gql`
  query Recipes {
    recipes {
      _id
      recipeTitle
      description
      author
    }
  }
`;