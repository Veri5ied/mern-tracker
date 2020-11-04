const express = require("express");
const exerciseCtrl = require("../controllers/exercise");
const router = express.Router();

router.get("/", exerciseCtrl.findExercises);
router.post("/add", exerciseCtrl.createExercises);

module.exports = router;