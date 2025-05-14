const express = require("express")

const router = express.Router()

const usersActivity = require("../Controllers/usersActivityController")

router.get("/getAll", usersActivity.getAll)
router.get("/getById/:myid", usersActivity.getById)
router.post("/add", usersActivity.add)
router.put("/update", usersActivity.update)
router.delete("/delete/:myid", usersActivity.delete)


module.exports = router