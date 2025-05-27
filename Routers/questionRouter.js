const express = require("express")

const router = express.Router()

const questionCtrl = require("../Controllers/questionController")

router.get("/getAll", questionCtrl.getAll)
router.get("/getById/:myid", questionCtrl.getById)
router.post("/add", questionCtrl.add)
router.put("/update", questionCtrl.update)
router.delete("/delete/:myid", questionCtrl.delete)


module.exports = router