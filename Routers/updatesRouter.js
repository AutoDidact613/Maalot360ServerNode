const express = require("express")

const router = express.Router()

const updateCtrl = require("../Controllers/updatesController")

router.get("/getAll", updateCtrl.getAll)
router.get("/getById/:myid", updateCtrl.getById)
router.post("/add", updateCtrl.add)
router.put("/update", updateCtrl.update)
router.delete("/delete/:myid", updateCtrl.delete)


module.exports = router