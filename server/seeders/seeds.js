const faker = require('faker');

const db = require('../config/connection');
const { Recipe, User } = require('../models');

db.once('open', async () => {

});