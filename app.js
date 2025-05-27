
const mymongo = require("mongoose")
mymongo.connect("mongodb+srv://autodidact:CY0JbInyQLZ70Irr@maalot360db.i2kujcl.mongodb.net/maalot360db?retryWrites=true&w=majority&appName=maalot360db")
const mydb = mymongo.connection;
mydb.on("open", ()=>{
    console.log("mongodb is open!!!");
})


const express = require("express")
const cors = require("cors")

const animalRouter = require("./Routers/animalRouter")
const contactUsRouter = require("./Routers/contactRouter");
const pageContentRouter = require("./Routers/pageContentRouter");

const app = express()
const PORT = 3000


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use("/animal", animalRouter)
app.use("/contact", contactUsRouter);
app.use("/pageContent", pageContentRouter);


app.get("/",(req,res)=>{
    res.send(`<h1>List of request avilable in server</h1>
              <ul>
                    <li><a href="https://maalot360-server.onrender.com/animal/getall" > https://maalot360-server.onrender.com/animal/getall </li>
                    <li><a href="https://maalot360-server.onrender.com/pageContent/" > https://maalot360-server.onrender.com/pageContent/ </li>
                    <li><a href="https://maalot360-server.onrender.com/contact/getall" > https://maalot360-server.onrender.com/contact/getall </li>
              </ul>
    `)
})

app.listen(PORT, ()=>{
    console.log("Server running...");
    
})



