
const mymongo = require("mongoose")
mymongo.connect("mongodb://localhost:27017/TaskAndQuestions"); // Updated connection string
const mydb = mymongo.connection;
mydb.on("open", ()=>{
    console.log("mongodb is open!!!");
    
})


const express = require("express")
const cors = require("cors")

const animalRouter = require("./Routers/animalRouter")
const taskRouter = require("./Routers/taskRouter")
const questionRouter = require("./Routers/questionRouter")



const app = express()
const PORT = 3000


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use("/animal", animalRouter)
app.use("/task", taskRouter)
app.use("/question", questionRouter)





app.get("/task", async (req, res) => { 
    res.send("hello from server")
})

app.listen(PORT, ()=>{
    console.log("Server running...");
    
})



