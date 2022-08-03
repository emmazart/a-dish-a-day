const faker = require('faker');

const db = require('../config/connection');
const { Thought, User } = require('../models');

db.once('open', async () => {

});