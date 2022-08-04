const { User, Recipe } = require("../models");

const { AuthenticationError } = require('apollo-server-express');




const resolvers = {
    Query: {
      
    }
  };

  module.exports = resolvers;

  /*
  tags: async () => {
        return tagSchema.find();
      }
      */