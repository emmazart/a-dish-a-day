// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
//QUESTION: tags are associated with recipes, but they must be queried. If only ever referenced through an individual recipe, how access tags by themselves (for selections ie buttons)?
// leaving out favorites for now

const typeDefs = gql`
    type Query {
        tags: [Tag]
        users: [User]
    }


    type Tag {
        tagName: String
    }

    type User {
        username: String
        email: String
        password: String
    }
    
    
`;
// export the typeDefs
module.exports = typeDefs;