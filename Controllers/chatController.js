const chatModel = require("../Models/chatModel");

const chat = {};

// Get all chat messages
chat.getAll = async (req, res) => {
    try {
        let data = await chatModel.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send("<h1>Server Error</h1>");
    }
};

// Get a chat message by id
chat.getById = async (req, res) => {
    let myid = req.params.myid;
    try {
        let data = await chatModel.find({ id: myid });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send("<h1>Server Error</h1>");
    }
};

// Delete a chat message by id
chat.delete = async (req, res) => {
    let id = req.params.myid;
    try {
        await chatModel.deleteOne({ id: id });
        let data = await chatModel.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send("<h1>Server Error</h1>");
    }
};

// Add new chat message
chat.add = async (req, res) => {
    let newMsg = req.body;
    try {
        await chatModel.create(newMsg);
        let data = await chatModel.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send("<h1>Server Error</h1>");
    }
};

// Update existing chat message
chat.update = async (req, res) => {
    let id = req.params.myid;
    let editMsg = req.body;
    try {
        await chatModel.updateOne({ id: id }, editMsg);
        let data = await chatModel.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send("<h1>Server Error</h1>");
    }
};

module.exports = chat;
