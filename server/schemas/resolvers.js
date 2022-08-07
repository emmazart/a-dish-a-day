const { Tag, Recipe, User } = require("../models");

const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');



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
      },
      login: async (parent, { email, password }) => { //finding one email, if no user, no email
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
        return { token, user };
      },
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
  
        return { token, user };
      },
      addFavorite: async (parent, args) => {
        const {recipe_id, user_id} = args;
       
        User.findOne( { _id: user_id } )
        .then(user => {
          user.favorite.push(recipe_id);
          user.save();
        });

        return;
      }

    }
  };

  module.exports = resolvers;