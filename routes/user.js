const express = require("express");
const userCtrl = require("../controllers/user");
const router = express.Router();

router.post("/add", userCtrl.Login);
router.get("/", userCtrl.Create);

module.exports = router;