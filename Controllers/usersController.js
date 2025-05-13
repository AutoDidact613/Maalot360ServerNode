
const express = require("express")


const usersModel = require("../Models/usersModel")

const user = {}

user.getAll = async(req, res)=>{

    try {
        let data = await usersModel.find({})
        res.status(200)
        res.json(data)

    }
    catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }

    
}

user.getById = async(req,res)=>{
    let myid = req.params.myid
    try {
        let data = await usersModel.find({code:myid})
        res.status(200)
        res.json(data)

    } catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }}


user.delete = async(req,res)=>{
    let id = req.params.myid
    try {
        await usersModel.deleteOne({code:id})
        let data = await usersModel.find({})
        res.status(200)
        res.json(data)

    } catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }
}

user.add = async(req, res)=>{
    let newUser = req.body
    try {
        await usersModel.create(newUser)
        let data = await usersModel.find({})
        res.status(200)
        res.json(data)

    } catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }}

    user.update = async(req, res)=>{
    let id = req.params.myid
    let editUser = req.body
    
    try {
        await usersModel.updateOne({code:id}, editUser)
        let data = await usersModel.find({})
        res.status(200)
        res.json(data)

    } catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }}



module.exports = user