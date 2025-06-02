
const express = require("express")


const updateModel = require("../Models/updatesModel")

const update = {}

update.getAll = async(req, res)=>{

    try {
        let data = await updateModel.find({})
        res.status(200)
        res.json(data)

    }
    catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }

    
}

update.getById = async(req,res)=>{
    let myid = req.params.myid
    try {
        let data = await updateModel.find({_id:myid})
        res.status(200)
        res.json(data)

    } catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }}
    

    update.delete = async(req,res)=>{
    let myid = req.params.myid
    try {
        await updateModel.deleteOne({_id:myid})
        let data = await updateModel.find({})
        res.status(200)
        res.json(data)

    } catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }
}

update.add = async(req, res)=>{
    let newUpdate = req.body
    try {
        await updateModel.create(newUpdate)
        let data = await updateModel.find({})
        res.status(200)
        res.json(data)

    } catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }}

    update.update = async(req, res) => {
    let myid = req.params.myid;
    let editUpdate = req.body;

    try {
        const result = await updateModel.updateOne(
            { _id: mongoose.Types.ObjectId(myid) }, // המרה ל-ObjectId אם צריך
            { $set: editUpdate }
        );
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Update not found" });
        }
        const updated = await updateModel.findOne({ _id: mongoose.Types.ObjectId(myid) });
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).send("<h1>Server Error</h1>");
    }
};



module.exports = update