const express = require("express")
const taskModel = require("../Models/taskModel")

const task = {}

task.getAll = async (req, res) => {
    try {
        let data = await taskModel.find({})
        res.status(200).json(data); // corrected response
    } catch (error) {
        console.error("Error in getAll:", error); // Added error logging
        res.status(500).json({ error: "Server Error" }); // Send JSON error response
    }
}

task.getById = async (req, res) => {
    let myid = req.params.myid
    try {
        let data = await taskModel.findById(myid); // Changed to findById
        if (!data) {
            return res.status(404).json({ error: "Task not found" }); // Handle not found
        }
        res.status(200).json(data);
    } catch (error) {
        console.error("Error in getById:", error);  // Added error logging
        res.status(500).json({ error: "Server Error" });
    }
}

task.delete = async (req, res) => {
    let id = req.params.myid
    try {
        const deletedTask = await taskModel.findByIdAndDelete(id); // Use findByIdAndDelete
        if (!deletedTask) {
            return res.status(404).json({ error: "Task not found" }); // Handle not found
        }
        res.status(200).json({ message: "Task deleted successfully" }); // Send success message
    } catch (error) {
        console.error("Error in delete:", error);  // Added error logging
        res.status(500).json({ error: "Server Error" });
    }
}

task.add = async (req, res) => {
    let newTask = req.body
    try {
        const createdTask = await taskModel.create(newTask)
        res.status(201).json(createdTask); // Send the created task
    } catch (error) {
        console.error("Error in add:", error);  // Added error logging
        res.status(500).json({ error: "Server Error" });
    }
}

task.update = async (req, res) => {
    let id = req.params.myid;
    let editTask = req.body;

    try {
        const updatedTask = await taskModel.findByIdAndUpdate(id, editTask, { new: true }); // Use findByIdAndUpdate
        if (!updatedTask) {
            return res.status(404).json({ error: "Task not found" }); // Handle not found
        }
        res.status(200).json(updatedTask); // Send the updated task
    } catch (error) {
        console.error("Error in update:", error); // Added error logging
        res.status(500).json({ error: "Server Error" });
    }
}

module.exports = task
