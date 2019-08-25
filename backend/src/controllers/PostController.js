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
      })
      .sort("-createdAt");

    return res.json(Posts);
  },

  async store(req, res) {
    const { author } = req.headers;

    const NewPost = await Post.create({
      author,
      ...req.body
    });

    const IoPost = await Post.findById(NewPost._id)
      .populate("author", { name: 1, avatar: 1 })
      .populate({
        path: "comments",
        populate: {
          path: "author"
        }
      });

    req.io.emit("post", IoPost);

    return res.json(NewPost);
  }
};
