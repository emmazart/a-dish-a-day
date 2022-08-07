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
  addFavorite(recipe: $recipe_id, user_id: $user_id) {}
}
`;


// HELLO GITHUB