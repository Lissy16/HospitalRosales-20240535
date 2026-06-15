const express = require ("express");
const router = express.Router();
const verifyPatientController= require("../controllers/verifyPatientController");

router.post("/",verifyPatientController);

