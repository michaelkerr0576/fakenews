const mongoose = require("mongoose");

const ArticleSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
  section: { type: String, required: true },
  datetime: { type: Date, default: Date.now },
  isHeadline1: { type: Boolean, default: false },
  isHeadline2: { type: Boolean, default: false },
  isHeadline3: { type: Boolean, default: false },
});

module.exports = mongoose.model("Article", ArticleSchema);
