const express = require("express");
const router = express.Router();

// Importing Controller
const ArticlesController = require("../controllers/articles");

// @route   GET /articles/
// @desc    Gets all articles
// @access  Public 
router.get("/", ArticlesController.articles_get_all);

// @route   POST /articles/
// @desc    Posts article
// @access  Private 
router.post("/", ArticlesController.articles_post_article);

// @route   GET /articles/id
// @desc    GET article by id
// @access  Public 
router.get("/:articleId", ArticlesController.articles_get_article);

// @route   PATCH /articles/id
// @desc    Updates article by id
// @access  Private 
router.patch("/:articleId", ArticlesController.articles_update_article);

// @route   DELETE /articles/id
// @desc    Deletes article by id
// @access  Private 
router.delete("/:articleId", ArticlesController.articles_delete_article);

module.exports = router;