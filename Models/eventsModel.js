
const mymongo = require("mongoose")


const eventSchema = mymongo.Schema({
    id:Number,
    title:String,
    type:String,
    start:String,
    end:String,
    importance:String,
    eventMessage:String,
    visible:Boolean
})

const eventModel = mymongo.model("Events", eventSchema, "Events")

module.exports = eventModel