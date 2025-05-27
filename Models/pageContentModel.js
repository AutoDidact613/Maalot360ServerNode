
const mongoose = require("mongoose");

const pageContentSchema = mongoose.Schema({
  pageName: { type: String, required: true, unique: true },
  content: { type: Object, required: true },
});

const pageContentModel = mongoose.model("pageContent", pageContentSchema, "pageContent");

module.exports = pageContentModel;
