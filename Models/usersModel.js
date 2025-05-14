
const mymongo = require("mongoose")


const userSchema = mymongo.Schema({
    code:Number,
    name:String,
    say:String
})

const usersModel = mymongo.model("User", userSchema, "User")

module.exports = usersModel