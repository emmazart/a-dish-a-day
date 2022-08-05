const { Tag, Recipe, User } = require("../models");

const { AuthenticationError } = require('apollo-server-express');




const resolvers = {
    Query: {
      tags: async () => {
        return Tag.find();
      },
      tag: async (parent, {tagName}) => {
        return Tag.findOne({tagName});
      },
      users: async () => {
        return User.find();
      },
      recipes: async () => {
        return Recipe.find();
      },
      recipe: async (parent, {recipeTitle}) => {
        return Tag.findOne({recipeTitle});
      }
    }, 

    

  };

  module.exports = resolvers;