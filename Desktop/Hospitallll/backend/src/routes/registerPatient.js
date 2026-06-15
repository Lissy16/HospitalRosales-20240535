const express = require("express");
const router = express.Router();
const registerPatientController = require("../controllers/loginPatienController");

router.post("/",loginPatientController);

module.exports= router;