const Author = require("../models/Author");

module.exports = {
  async index(req, res) {
    const author = await Author.find();

    return res.json(author);
  },

  async store(req, res) {
    const authorCreate = await Author.create(req.body);

    return res.json(authorCreate);
  }
};
