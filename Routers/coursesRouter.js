const express = require("express")

const router = express.Router()

const courseCtrl = require("../Controllers/coursesController")

router.get("/getAll", courseCtrl.getAll)
router.get("/getById/:myid", courseCtrl.getById)
router.post("/add", courseCtrl.add)
router.put("/update/:myid", courseCtrl.update)
router.delete("/delete/:myid", courseCtrl.delete)


module.exports = router
