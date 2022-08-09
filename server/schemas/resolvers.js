const { Tag, Recipe, User } = require("../models");
// const reviewSchema = require("./Review");
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
      addReview: async (parent,  { _id, reviewText, rating }, context) => {
        
        if (context.user) {
          const updatedRecipe = await Recipe.findOneAndUpdate(
            { _id: _id },
            { $push: { review: { reviewText, username: context.user.username, rating } } },
            { new: true, runValidators: true }
          );
          console.log(updatedRecipe);
          return updatedRecipe;

            }
            throw new AuthenticationError('You need to be logged in!');
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
      }
    }
  };

  module.exports = resolvers;