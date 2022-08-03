const { Tag} = require("../models");
const resolvers = {
    Query: {
      tags: async () => {
        return Tag.find();
      }
    }
  };

  module.exports = resolvers;