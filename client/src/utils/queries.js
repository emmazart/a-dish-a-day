import { gql } from '@apollo/client';

export const QUERY_RECIPES = gql`
  query Recipes {
    recipes {
      _id
      recipeTitle
      description
      author
      img
    }
  }
`;

export const QUERY_TAGS = gql`
  query Tags {
    tags {
      tagName
    }
  }
`;