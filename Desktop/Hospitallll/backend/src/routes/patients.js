const express = require("express");
const router = express.Router();
 
const {
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} = require("../controllers/patientsController");
 
//CRUD
router.get("/", getPatients);
router.get("/:id", getPatientById);
router.put("/:id", updatePatient);
router.delete("/:id", deletePatient);
 
module.exports = router;