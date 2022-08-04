const { Tag, Recipe } = require("../models");

const { AuthenticationError } = require('apollo-server-express');




const resolvers = {
    Query: {
      tags: async () => {
        return Tag.find();
      }
      
    }
  };

  module.exports = resolvers;