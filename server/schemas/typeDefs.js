// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
//QUESTION: tags are associated with recipes, but they must be queried. If only ever referenced through an individual recipe, how access tags by themselves (for selections ie buttons)?
// leaving out favorites for now

const typeDefs = gql`
    type Query {
        tags: [Tag]
        tag(tagName: String!): Tag
        users: [User]
        user(_id: String!): User
        recipes: [Recipe]
        recipe(_id: String!): Recipe
    }


    type Tag {
        tagName: String
    }

    type User {
        _id: String
        username: String
        email: String
        password: String
    }
    
    type Recipe {
        _id: String
        recipeTitle: String
        description: String
        author: String
        img: String
        ingredient: [String]
        preperationStep: [String]
        tag: [Tag]        
        
    }




    
    type Mutation {
        addTag(tagName: String!): Tag
    }
    
`;
// export the typeDefs
module.exports = typeDefs;