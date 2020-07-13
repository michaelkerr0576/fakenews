const mongoose = require("mongoose");

// Importing Model
const Article = require("../models/Article");

exports.articles_get_all = async (req, res, next) => {
  await Article.find()
    .select("-__v") // will exclude __v from fetch
    .sort({ date: -1 }) //-1 for date descending sort //1 for date ascending sort
    .then((articles) => {
      res.status(200).json({
        count: articles.length,
        Articles: articles.map((article) => {
          return {
            _id: article._id,
            title: article.title,
            subtitle: article.subtitle,
            body: article.body,
            author: article.author,
            section: article.section,
            datetime: article.datetime,
            isHeadline1: article.isHeadline1,
            isHeadline2: article.isHeadline2,
            isHeadline3: article.isHeadline3,
            request: {
              type: "GET",
              description: "GET article",
              url: process.env.REACT_APP_URL + "/articles/" + article.id,
            },
          };
        }),
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.articles_post_article = async (req, res, next) => {
  const newArticle = new Article({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    subtitle: req.body.subtitle,
    body: req.body.body,
    author: req.body.author,
    section: req.body.section,
    isHeadline1: req.body.isHeadline1,
    isHeadline2: req.body.isHeadline2,
    isHeadline3: req.body.isHeadline3,
  });
  await newArticle
    .save()
    .then((article) => {
      console.log(article);
      res.status(201).json({
        message: "New Article",
        newArticle: {
          _id: article._id,
          title: article.title,
          subtitle: article.subtitle,
          body: article.body,
          author: article.author,
          section: article.section,
          datetime: article.datetime,
          isHeadline1: article.isHeadline1,
          isHeadline2: article.isHeadline2,
          isHeadline3: article.isHeadline3,
          request: {
            type: "GET",
            description: "GET Posted Article",
            url: process.env.REACT_APP_URL + "/article/" + article.id,
          },
        },
      });
    })
    // .then((article) => res.json(article))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.articles_get_article = async (req, res, next) => {
  const id = req.params.articleId;
  console.log(req.params);
  await Article.findById(id)
    .select("-__v") // will exclude __v from fetch
    .then((article) => {
      console.log(article);
      if (article) {
        res.status(200).json({
          _id: article._id,
          title: article.title,
          subtitle: article.subtitle,
          body: article.body,
          author: article.author,
          section: article.section,
          datetime: article.datetime,
          isHeadline1: article.isHeadline1,
          isHeadline2: article.isHeadline2,
          isHeadline3: article.isHeadline3,
          request: {
            type: "GET",
            description: "GET all articles",
            url: process.env.REACT_APP_URL + "/articles",
          },
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.articles_update_article = async (req, res, next) => {
  const id = req.params.articleId;
  // handles different types of patch requests
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.prop] = ops.value;
  }
  await Article.update({ _id: id }, { $set: updateOps })
    .exec()
    .then((article) => {
      console.log(article);
      res.status(200).json({
        message: "Article updated",
        request: {
          type: "GET",
          description: "GET updated article",
          url: process.env.REACT_APP_URL + "/articles/" + id,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.articles_delete_article = async (req, res, next) => {
  const id = req.params.articleId;
  console.log(req.params);
  await Article.findById(id)
    .then((article) =>
      article.remove().then(() =>
        res.status(200).json({
          message: "Article deleted",
          request: {
            type: "GET",
            description: "GET all articles",
            url: process.env.REACT_APP_URL + "/articles",
          },
        })
      )
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
