const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  phone: String,
  courseId: Number,
  courseName: String,
  message: String,
  dateCreated: { type: Date, default: Date.now },
  status: { type: Boolean, default: false }
});

const contactModel = mongoose.model("contact", contactSchema, "contact");

module.exports = contactModel;
