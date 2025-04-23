
const express = require("express")


const animModel = require("../Models/animalModel")

const animal = {}

animal.getAll = async(req, res)=>{

    try {
        let data = await animModel.find({})
        res.status(200)
        res.json(data)

    }
    catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }

    
}

animal.getById = async(req,res)=>{
    let myid = req.params.myid
    try {
        let data = await animModel.find({code:myid})
        res.status(200)
        res.json(data)

    } catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }}


animal.delete = async(req,res)=>{
    let id = req.params.myid
    try {
        await animModel.deleteOne({code:id})
        let data = await animModel.find({})
        res.status(200)
        res.json(data)

    } catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }
}

animal.add = async(req, res)=>{
    let newAnim = req.body
    try {
        await animModel.create(newAnim)
        let data = await animModel.find({})
        res.status(200)
        res.json(data)

    } catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }}

animal.update = async(req, res)=>{
    let id = req.params.myid
    let editAnim = req.body
    
    try {
        await animModel.updateOne({code:id}, editAnim)
        let data = await animModel.find({})
        res.status(200)
        res.json(data)

    } catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }}



module.exports = animal