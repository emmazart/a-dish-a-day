const { Schema } = require('mongoose');
const reviewSchema = new Schema(
    {
      reviewText: {
        type: String,
        trim: true,
      },
      rating: {
        //contains mouthwatering prose for the dish
        type: Number,
        required: true,
      },
      username: {
        type: String,
        minlength: 1,
      }
    },
    {
      toJSON: {
        virtuals: true, //reminder virutals are like pseudofields
      },
    }
  );
  
module.exports = reviewSchema;
  