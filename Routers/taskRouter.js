const express = require("express")

const router = express.Router()

const taskCtrl = require("../Controllers/taskController")

router.get("/getAll", taskCtrl.getAll)
router.get("/getById/:myid", taskCtrl.getById)
router.post("/add", taskCtrl.add)
router.put("/update", taskCtrl.update)
router.delete("/delete/:myid", taskCtrl.delete)


module.exports = router