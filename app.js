
const mymongo = require("mongoose")
mymongo.connect("mongodb://localhost:27017/chatDB")
const mydb = mymongo.connection;
mydb.on("open", ()=>{
    console.log("mongodb is open!!!");
    
})


const express = require("express")
const cors = require("cors")

const chatRouter = require("./Routers/chatRouter")

const app = express()
const PORT = 3000


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use("/chat", chatRouter)


app.get("/",(req,res)=>{
    res.send("hello from server")
})

app.listen(PORT, ()=>{
    console.log("Server running...");
    
})



