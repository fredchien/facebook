const Comments = require("../models/Comments");
const Post = require("../models/Post");
const Author = require("../models/Author");

module.exports = {
  async store(req, res) {
    const { author } = req.headers;
    const { post, date, content } = req.body;

    const TargetPost = await Post.findById(post);

    const postComment = new Comments({ author, post, date, content });

    await postComment.save();

    TargetPost.comments.push(postComment);

    await TargetPost.save();

    req.io.emit("comment", TargetPost);

    return res.json(TargetPost);
  }
};
