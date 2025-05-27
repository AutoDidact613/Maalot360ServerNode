
const mymongo = require("mongoose")


const taskSchema = mymongo.Schema({
    id:Number,
    name:String,
    desc:String,
    lessonId:String,
    finalDate:String,
    instructionsFile:String,
    type:String,
    course:String,
    isSubmitted:Boolean
  
})

const taskModel = mymongo.model("Task", taskSchema, "Task")

module.exports = taskModel