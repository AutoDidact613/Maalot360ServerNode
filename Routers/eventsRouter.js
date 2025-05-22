const express = require("express")

const router = express.Router()

const eventCtrl = require("../Controllers/eventsController")

router.get("/getAll", eventCtrl.getAll)
router.get("/getById/:myid", eventCtrl.getById)

router.get("/getByType/:mytype/", eventCtrl.getByType)
router.post("/add", eventCtrl.add)
router.put("/update/:myid", eventCtrl.update)
router.delete("/delete/:myid", eventCtrl.delete)


module.exports = router