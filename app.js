
const mymongo = require("mongoose")
mymongo.connect("mongodb://localhost:27017/")
const mydb = mymongo.connection;
mydb.on("open", ()=>{
    console.log("mongodb is open!!!");
    
})


const express = require("express")
const cors = require("cors")

const usersActivityRourer = require("./Routers/usersActivityRourer")

const app = express()
const PORT = 3000


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use("/usersActivity", usersActivityRourer)


app.get("/",(req,res)=>{
    res.send(`<h1>List of request avilable in server</h1>
              <ul>
                    <li><a  href="https://maalot360-server.onrender.com/usersActivity/getall" > https://maalot360-server.onrender.com/usersActivity/getall </li>
              </ul>
    `)
})

app.listen(PORT, ()=>{
    console.log("Server running...");
    
})



