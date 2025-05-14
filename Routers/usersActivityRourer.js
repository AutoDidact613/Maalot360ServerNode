const express = require("express")

const router = express.Router()

const usersActivityCtrl = require("../Controllers/usersActivityController")

router.get("/getAll", usersActivityCtrl.getAll)
router.get("/getById/:myid", usersActivityCtrl.getById)
router.post("/add", usersActivityCtrl.add)
router.put("/update", usersActivityCtrl.update)
router.delete("/delete/:myid", usersActivityCtrl.delete)


module.exports = router