const express = require("express");
const eventModel = require("../Models/eventsModel");

const event = {};

event.getAll = async (req, res) => {
    try {
        const data = await eventModel.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send("<h1>Server Error</h1>");
    }
};

event.getById = async (req, res) => {
    const myid = Number(req.params.myid);
    try {
        const data = await eventModel.find({ _id: myid });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send("<h1>Server Error</h1>");
    }
};

event.getByType = async (req, res) => {
    const mytype = req.params.mytype;
    try {
        const data = await eventModel.find({ type: mytype });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send("<h1>Server Error</h1>");
    }
};

event.delete = async (req, res) => {
    const id = Number(req.params.myid);
    try {
        await eventModel.deleteOne({ _id: id });
        const data = await eventModel.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send("<h1>Server Error</h1>");
    }
};

event.add = async (req, res) => {
    const newEvent = req.body;
    try {
        await eventModel.create(newEvent);
        const data = await eventModel.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send("<h1>Server Error</h1>");
    }
};

event.update = async (req, res) => {
    const myid = Number(req.params.myid);
    const editEvent = req.body;
    try {
        const result = await eventModel.updateOne(
            { _id: myid },
            { $set: editEvent }
        );
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Event not found" });
        }
        const updated = await eventModel.findOne({ _id: myid });
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).send("<h1>Server Error</h1>");
    }
};

module.exports = event;
