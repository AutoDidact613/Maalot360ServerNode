
const mymongo = require("mongoose")


const updateSchema = mymongo.Schema({
    id:Number,
    title:String,
    start:String,
    end:String,
    updateMessage:String
    
})

const updatesModel = mymongo.model("Updates", updateSchema, "Updates")

module.exports = updatesModel