const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const animalRouter = require("./Routers/animalRouter");
const courseRouter = require("./Routers/coursesRouter");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const conn1 = mongoose.createConnection(
  "mongodb+srv://autodidact:CY0JbInyQLZ70Irr@maalot360db.i2kujcl.mongodb.net/maalot360db?retryWrites=true&w=majority&appName=maalot360db",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
conn1.on("open", () => {
  console.log("Connected to Maalot360DB (animal)");
});

const conn2 = mongoose.createConnection(
  "mongodb+srv://r0533160762:GkkpTBvELwtxkCBc@courses.m5ru6ic.mongodb.net/?retryWrites=true&w=majority&appName=Courses",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
conn2.on("open", () => {
  console.log("Connected to Courses DB");
});


app.use("/animal", animalRouter);
app.use("/course", courseRouter);

app.get("/", (req, res) => {
  res.send(`
    <h1>List of available requests in the server</h1>
    <ul>
      <li><a href="/animal/getall">/animal/getall</a></li>
      <li><a href="/course/getall">/course/getall</a></li>
    </ul>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
