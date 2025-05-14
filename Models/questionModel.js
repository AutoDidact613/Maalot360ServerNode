
const mymongo = require("mongoose")


const questionSchema = mymongo.Schema({
    id:Number,
    Number:Number,
    text:String,
    commentOrFile:String,
    taskId:String

})

const questionModel = mymongo.model("Question", questionSchema, "Question")

module.exports = questionModel