const mongoose = require("mongoose");

const pageContentSchema = mongoose.Schema({
  elementTag: String,
  elementType: String,
  text: String,
  src: String,
  pageName: String
});

const pageContentModel = mongoose.model("pageContent", pageContentSchema, "pageContent");

module.exports = pageContentModel;
