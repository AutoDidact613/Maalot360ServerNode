const express = require("express");
const router = express.Router();
const contactCtrl = require("../Controllers/contactController");

router.get("/getAll", contactCtrl.getAll);
router.get("/getById/:id", contactCtrl.getById);
router.post("/add", contactCtrl.add);
router.put("/update/:id", contactCtrl.update);
router.delete("/delete/:id", contactCtrl.delete);

module.exports = router;
