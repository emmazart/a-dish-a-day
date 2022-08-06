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
      user: async (parent, {_id}) => {
        return User.findOne({_id});
      },
      recipes: async () => {
        return Recipe.find();
      },
      recipe: async (parent, {_id}) => {
        return Recipe.findOne({_id});
      }
    },

    Mutation: {
      addTag: async (parent, args) => {
        const newTag = await Tag.create(args);
        return newTag;
      }
    }
  };

  module.exports = resolvers;