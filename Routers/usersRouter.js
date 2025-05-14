const express = require("express")

const router = express.Router()

const userCtrl = require("../Controllers/usersController")

router.get("/getAll", userCtrl.getAll)
router.get("/getById/:myid", userCtrl.getById)
router.post("/add", userCtrl.add)
router.put("/update", userCtrl.update)
router.delete("/delete/:myid", userCtrl.delete)


module.exports = router