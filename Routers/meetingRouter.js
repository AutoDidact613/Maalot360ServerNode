const express = require("express")

const router = express.Router()

const meetingCtrl = require("../Controllers/meetingsController")

router.get("/getAll", meetingCtrl.getAll)
router.get("/getById/:myid", meetingCtrl.getById)
router.post("/add", meetingCtrl.add)
router.put("/update/:myid", meetingCtrl.update)
router.delete("/delete/:myid", meetingCtrl.delete)


module.exports = router