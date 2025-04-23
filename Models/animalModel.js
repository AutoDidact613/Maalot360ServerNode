
const mymongo = require("mongoose")


const animalSchema = mymongo.Schema({
    code:Number,
    name:String,
    say:String
})

const animalModel = mymongo.model("Animal", animalSchema, "Animal")

module.exports = animalModel