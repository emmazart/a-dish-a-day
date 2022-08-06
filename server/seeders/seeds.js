//const faker = require('faker');
const userSeeds = require('./userSeeds.json');
const tagSeeds = require('./tagSeeds.json');
const recipeSeeds =require('./recipeSeeds.json')
const db = require('../config/connection');
const { Recipe, User, Tag } = require('../models');

db.once('open', async () => {
    try {//each one of itself does not throw e11000
        await User.deleteMany({});
    
        await User.create(userSeeds);

        await Tag.deleteMany({});
    
        await Tag.create(tagSeeds);

        await Recipe.deleteMany({});
    
        await Recipe.create(recipeSeeds);
    
        
      } catch (err) {
        console.error(err);
        process.exit(1);
      }
    
      console.log('all done!');
      process.exit(0);

});