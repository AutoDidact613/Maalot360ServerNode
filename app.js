
const mymongo = require("mongoose")
//לשים את הכתובת של המונגו דטאבייס שלכם
mymongo.connect("mongodb://localhost:27017/StudySchedule")
//mymongo.connect("mongodb+srv://autodidact:CY0JbInyQLZ70Irr@maalot360db.i2kujcl.mongodb.net/maalot360db?retryWrites=true&w=majority&appName=maalot360db")
//mongodb+srv://autodidact:CY0JbInyQLZ70Irr@maalot360db.i2kujcl.mongodb.net/maalot360db?retryWrites=true&w=majority&appName=maalot360db
const mydb = mymongo.connection;
mydb.on("open", () => {
    console.log("mongodb is open!!!");

})


const express = require("express")
const cors = require("cors")

const eventsRouter = require("./Routers/eventsRouter")
const updatesRouter = require("./Routers/updatesRouter")

const app = express()
const PORT = 3000


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use("/event", eventsRouter)
app.use("/update", updatesRouter)

app.get("/", (req, res) => {
    res.send(`<h1>List of request avilable in server</h1>
              <ul>
                    <li><a  href="https://maalot360-server.onrender.com/event/getall" > https://maalot360-server.onrender.com/event/getall </li>
                    <li><a  href="https://maalot360-server.onrender.com/event/getbytype" > https://maalot360-server.onrender.com/event/getbytype </li>
                    <li><a  href="https://maalot360-server.onrender.com/update/getall" > https://maalot360-server.onrender.com/update/getall </li>
                   
              </ul>
    `)
})

app.listen(PORT, () => {
    console.log("Server running...");

})



