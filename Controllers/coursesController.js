
const express = require("express")


const courseModel = require("../Models/coursesModel")

const course = {}

course.getAll = async(req, res)=>{

    try {
        let data = await courseModel.find({})
        res.status(200)
        res.json(data)

    }
    catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }

    
}

course.getById = async(req,res)=>{
    let myid = req.params.myid
    try {
        let data = await courseModel.find({id:myid})
        res.status(200)
        res.json(data)

    } catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }}


    course.delete = async(req,res)=>{
    let id = req.params.myid
    try {
        await courseModel.deleteOne({id:id})
        let data = await courseModel.find({})
        res.status(200)
        res.json(data)

    } catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }
}

course.add = async(req, res)=>{
    let newcourse = req.body
    try {
        await courseModel.create(newcourse)
        let data = await courseModel.find({})
        res.status(200)
        res.json(data)

    } catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }}

course.update = async(req, res)=>{
    let id = req.params.myid
    let editAnim = req.body
    
    try {
        await courseModel.updateOne({id:id}, editAnim)
        let data = await courseModel.find({})
        res.status(200)
        res.json(data)

    } catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }}



module.exports = course