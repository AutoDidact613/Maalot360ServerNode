
const mymongo = require("mongoose")


const usersActivitySchema = mymongo.Schema({
    id:Number,
    userId:Number,
    type:String,
    url:String,
    date:String, 
})

const usersActivityModel = mymongo.model("UsersActivity",usersActivitySchema , "UsersActivity")

module.exports = usersActivityModel