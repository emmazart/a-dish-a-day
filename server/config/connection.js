const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:38797/Dish', { //reminder to change name
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;
