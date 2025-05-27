
const express = require("express");
const router = express.Router();
const controller = require("../Controllers/pageContentController");

// שימוש בפונקציות מהקונטרולר
router.get("/", controller.getAll);
router.post("/add", controller.add);
router.put("/update", controller.update);
router.delete("/delete/:id", controller.delete);

module.exports = router;
