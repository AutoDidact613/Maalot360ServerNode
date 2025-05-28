const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
    id: Number,
    user: String,
    message: String,
    time: { type: Date, default: Date.now }
});

const chatModel = mongoose.model("Chat", chatSchema, "Chat");

module.exports = chatModel;
