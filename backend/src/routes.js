const express = require("express");

const AuthorController = require("./controllers/AuthorController");
const PostController = require("./controllers/PostController");
const CommentController = require("./controllers/CommentController");

const routes = new express.Router();

// AUTHOR routes
routes.get("/authors", AuthorController.index);
routes.post("/authors", AuthorController.store);

// POST routes
routes.get("/posts", PostController.index);
routes.post("/posts", PostController.store);

// COMMENTS routes
routes.post("/comments", CommentController.store);

module.exports = routes;
