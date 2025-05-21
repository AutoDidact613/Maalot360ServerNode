const express = require("express")


const meetingModel = require("../Models/meetingModel")

const meeting = {}

meeting.getAll = async(req, res)=>{

    try {
        let data = await meetingModel.find({})
        res.status(200)
        res.json(data)

    }
    catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }

    
}

meeting.getById = async(req,res)=>{
    let myid = req.params.myid
    try {
        let data = await meetingModel.find({code:myid})
        res.status(200)
        res.json(data)

    } catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }}


    meeting.delete = async(req,res)=>{
    let myid = req.params.myid
    try {
        await meetingModel.deleteOne({code:myid})
        let data = await meetingModel.find({})
        res.status(200)
        res.json(data)

    } catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }
}

meeting.add = async(req, res)=>{
    let newAnim = req.body
    try {
        await meetingModel.create(newAnim)
        let data = await meetingModel.find({})
        res.status(200)
        res.json(data)

    } catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }}

    meeting.update = async(req, res)=>{
    let myid = req.params.myid
    let editMeeting = req.body
    
    try {
        // await meetingModel.updateOne({code:myid}, editMeeting)
        await meetingModel.updateOne({ code: myid }, { $set: editMeeting })
        let data = await meetingModel.find({})
        res.status(200)
        res.json(data)

    } catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }}



module.exports = meeting