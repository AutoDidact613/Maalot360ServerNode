const express = require("express")
const taskModel = require("../Models/questionModel")

const question = {}

question.getAll = async (req, res) => {
    try {
        let data = await questionModel.find({})
        res.status(200).json(data); // corrected response
    } catch (error) {
        console.error("Error in getAll:", error); // Added error logging
        res.status(500).json({ error: "Server Error" }); // Send JSON error response
    }
}

question.getById = async (req, res) => {
    let myid = req.params.myid
    try {
        let data = await questionModel.findById(myid); // Changed to findById
        if (!data) {
            return res.status(404).json({ error: "Task not found" }); // Handle not found
        }
        res.status(200).json(data);
    } catch (error) {
        console.error("Error in getById:", error);  // Added error logging
        res.status(500).json({ error: "Server Error" });
    }
}

question.delete = async (req, res) => {
    let id = req.params.myid
    try {
        const deletedQuestion = await questionModel.findByIdAndDelete(id); // Use findByIdAndDelete
        if (!deletedQuestion) {
            return res.status(404).json({ error: "Task not found" }); // Handle not found
        }
        res.status(200).json({ message: "Task deleted successfully" }); // Send success message
    } catch (error) {
        console.error("Error in delete:", error);  // Added error logging
        res.status(500).json({ error: "Server Error" });
    }
}

question.add = async (req, res) => {
    let newQuestion = req.body
    try {
        const createdQuestion = await questionModel.create(newQuestion)
        res.status(201).json(createdQuestion); // Send the created task
    } catch (error) {
        console.error("Error in add:", error);  // Added error logging
        res.status(500).json({ error: "Server Error" });
    }
}

question.update = async (req, res) => {
    let id = req.params.myid;
    let editQuestion = req.body;

    try {
        const updatedQuestion = await questionModel.findByIdAndUpdate(id, editQuestion, { new: true }); // Use findByIdAndUpdate
        if (!updatedQuestion) {
            return res.status(404).json({ error: "Task not found" }); // Handle not found
        }
        res.status(200).json(updatedQuestion); // Send the updated task
    } catch (error) {
        console.error("Error in update:", error); // Added error logging
        res.status(500).json({ error: "Server Error" });
    }
}

module.exports = question
