
const express = require("express")


const usersActivityModel = require("../Models/usersActivityModel")
const usersActivity = {}

usersActivity.getAll = async (req, res) => {

    try {
        let data = await usersActivityModel.find({})
        res.status(200)
        res.json(data)

    }
    catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }


}

usersActivity.getById = async (req, res) => {
    let myid = req.params.myid
    try {
        let data = await usersActivityModel.find({ id: myid })
        res.status(200)
        res.json(data)

    } catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }
}


usersActivity.delete = async (req, res) => {
    let id = req.params.myid
    try {
        await usersActivityModel.deleteOne({ id: id })
        let data = await usersActivityModel.find({})
        res.status(200)
        res.json(data)

    } catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }
}

usersActivity.add = async (req, res) => {
    let newUsersActivity = req.body
    try {
        await usersActivityModel.create(newUsersActivity)
        let data = await usersActivityModel.find({})
        res.status(200)
        res.json(data)

    } catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }
}

usersActivity.update = async (req, res) => {
    let id = req.params.myid
    let editUsersActivity = req.body

    try {
        await usersActivityModel.updateOne({ id: id }, editUsersActivity)
        let data = await usersActivityModel.find({})
        res.status(200)
        res.json(data)

    } catch (error) {
        res.status(500)
        res.send("<h1>Server Error</h1>")
    }
}



module.exports = usersActivity