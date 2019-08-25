const Post = require("../models/Post");

module.exports = {
  async index(req, res) {
    const Posts = await Post.find()
      .populate("author", { name: 1, avatar: 1 })
      .populate({
        path: "comments",
        populate: {
          path: "author"
        }
      });

    return res.json(Posts);
  },

  async store(req, res) {
    const { author } = req.headers;

    const NewPost = await Post.create({
      author,
      ...req.body
    });

    req.io.emit("post", NewPost);

    return res.json(NewPost);
  }
};
