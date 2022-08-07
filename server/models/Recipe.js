const { Schema, model } = require("mongoose");
//const { Tag } = require('../schemas/resolvers');

const tag = require("./Tag");



//ALL FIELD NAMES WILL BE SINGULAR
//<filename(lowercase)>Schema
const recipeSchema = new Schema(

  {
    recipeTitle: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    description: {
      //contains mouthwatering prose for the dish
      type: String,
      required: true,
      trim: true
    },
    author: {
      type: String,
      minlength: 1
    },
    img: {
      type: String
    },
    ingredient: {
      //WHEN PARSING INTO ARRAY, SPLIT BY COMMA i.e 1 clobe of garlic, 2 glasses of milk ->
      //1 clobe of garlic
      //2 glasses of milk
      type: Array
    },
    preperationStep: {
      //contains actual cooking instructions
      type: Array, //retrieve steps and auto increment step count ie 1. 1 clobe of garlic, 2. 2 glasses of milk

      trim: true
    },
    tag: [
      {
        type: Object,
        ref: "Tag"

      },
    ]
  },
  {
    toJSON: {
      virtuals: true, //reminder virutals are like pseudofields
    },
  }
);

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
