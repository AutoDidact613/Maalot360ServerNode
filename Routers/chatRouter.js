const express = require("express");
const router = express.Router();

const chatCtrl = require("../Controllers/chatController");

router.get("/getAll", chatCtrl.getAll);
router.get("/getById/:myid", chatCtrl.getById);
router.post("/add", chatCtrl.add);
router.put("/update/:myid", chatCtrl.update);
router.delete("/delete/:myid", chatCtrl.delete);

module.exports = router;
