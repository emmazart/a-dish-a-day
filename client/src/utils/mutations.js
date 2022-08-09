import { gql } from '@apollo/client';


export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
    token
    user {
        username
        email
        password
    }
    }
}
`;

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// create mutation to add favorite
export const ADD_FAVORITE = gql`
mutation AddFavorite($recipe_id: String!, $user_id: String!) {
  addFavorite(recipe_id: $recipe_id, user_id: $user_id) 
}
`;

// mutation to post a review
export const ADD_REVIEW = gql `
mutation AddReview($reviewText: String!, $rating: Int!, $id: String) {
  addReview(reviewText: $reviewText, rating: $rating, _id: $id) {
    reviewText
    rating
    username
  }
}
`;