const mongoose = require("mongoose");

const PostFaceSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    content: String,
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comments"
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("PostFace", PostFaceSchema);
