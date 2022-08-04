const { User, Recipe } = require("../models");

const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');



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