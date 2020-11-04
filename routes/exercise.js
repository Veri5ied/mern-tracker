const express = require("express");
const exerciseCtrl = require("../controllers/exercise");
const router = express.Router();

router.post("/", exerciseCtrl);