
const mymongo = require("mongoose")
//לשים את הכתובת של המונגו דטאבייס שלכם
mymongo.connect("mongodb://localhost:27017/StudySchedule")

const mydb = mymongo.connection;
mydb.on("open", ()=>{
    console.log("mongodb is open!!!");
    
})


const express = require("express")
const cors = require("cors")

const eventsRouter = require("./Routers/eventsRouter")
const updatesRouter = require("./Routers/updatesRouter")

const app = express()
const PORT = 3000


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use("/event", eventsRouter)
app.use("/update", updatesRouter)

app.get("/",(req,res)=>{
    res.send("hello from server")
})

app.listen(PORT, ()=>{
    console.log("Server running...");
    
})



