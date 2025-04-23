const express = require("express")

const router = express.Router()

const animalCtrl = require("../Controllers/animalController")

router.get("/getAll", animalCtrl.getAll)
router.get("/getById/:myid", animalCtrl.getById)
router.post("/add", animalCtrl.add)
router.put("/update", animalCtrl.update)
router.delete("/delete/:myid", animalCtrl.delete)


module.exports = router