const { Tag, Recipe, User } = require("../models");

const { AuthenticationError } = require('apollo-server-express');




const resolvers = {
    Query: {
      tags: async () => {
        return Tag.find();
      },
      users: async () => {
        return User.find();
      },
      recipe: async () => {
        return Recipe.find();
      }
    }
  };

  module.exports = resolvers;