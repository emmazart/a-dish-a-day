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
      recipesByDescTitle: async () => {//returns recipes by descending alphabetical order
        return Recipe.find().sort({"recipeTitle" : 1});//find -> sort ({"field" : 1/-1}), where 1/-1 determine ascending/descending order
      },
      recipesByDescNaturalOrder: async () => {//returns recipes by descending (order of storage?); DOES NOT ACTUALLY RETURN IN INPUT ORDER
        //https://stackoverflow.com/questions/33018048/how-does-mongodb-order-their-docs-in-one-collection#:~:text=MongoDB%20does%20not%20%22order%22%20the,tell%20it%20to%20do%20otherwise
        return Recipe.find().sort({$natural : -1});//https://www.mongodb.com/docs/manual/reference/glossary/
      },
      recipesByDescDateOrder: async () => {
        return Recipe.find().sort({"_id" : -1});//https://stackoverflow.com/questions/5125521/uses-for-mongodb-objectid-creation-time
        //https://www.mongodb.com/docs/manual/reference/method/ObjectId.getTimestamp/
      },
      recipe: async (parent, {_id}) => {
        return Recipe.findOne({_id});
      },
      recipesbyTag: async (parent, {tagName}) => {
        const params = [tagName];
        return  await Recipe.find({
          "tag": params //PARAMS IS ARRAY, TAG IS ARRAY, NOW PROPERLY COMPARED
          //array of tags, array of strings
          //tagName naming convention, so this comparison works (?)
          //anytime you find something in an array you search by value
        });
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
      },
      addFavorite: async (parent, args) => {
        const {recipe_id, user_id} = args;

        User.findOne( { _id: user_id } )
        .then(user => {
          user.favorite.push(recipe_id);
          user.save();
        });
        
        return "Favorite added";
      }

    }
  };

  module.exports = resolvers;