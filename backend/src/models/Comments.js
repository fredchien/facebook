const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: true
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PostFace",
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    content: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Comments", CommentsSchema);
