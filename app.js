const express = require("express")
const mymongo = require("mongoose")
const courseRouter = require("./Routers/coursesRouter") // או הנתיב המתאים

const app = express()

// חיבור למסד הנתונים המקומי
  mymongo.connect("mongodb+srv://r0533160762:GkkpTBvELwtxkCBc@courses.m5ru6ic.mongodb.net/?retryWrites=true&w=majority&appName=Courses")  .then(() => console.log("Connected to MongoDB locally"))
  .catch(err => console.error("MongoDB connection error:", err))

app.use("/course", courseRouter)

app.get("/", (req, res) => {
  res.send(`
    <h1>List of available requests in the server</h1>
    <ul>
       <li><a href="https://maalot360servernode-1.onrender.com/courses/getAll">https://maalot360servernode-1.onrender.com/courses/getAll</a></li>
       <li><a href="https://maalot360servernode-1.onrender.com/courses/add">https://maalot360servernode-1.onrender.com/courses/add</a></li>
       <li><a href="https://maalot360servernode-1.onrender.com/courses/delete/ID">https://maalot360servernode-1.onrender.com/courses/delete/ID</a></li>
       <li><a href="https://maalot360servernode-1.onrender.com/courses/update/ID">https://maalot360servernode-1.onrender.com/courses/update/ID</a></li>
    </ul>
  `)
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
