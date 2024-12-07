// Main Module Required..
const express = require("express");

const controller = require("../controller/skill");

const router = express.Router();

router.post("/add", controller.add);
router.put("/edit", controller.edit);
router.post("/get-all", controller.getAll);
router.get("/get-by-id/:id", controller.getById);
router.delete("/delete/:id", controller.delete);

module.exports = router;