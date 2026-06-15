const express = require("express");
const router = express.Router();
 
const {
  createSpecialty,
  getSpecialties,
  updateSpecialty,
  deleteSpecialty,
} = require("../controllers/specialtiesController");
 
router.post("/", createSpecialty);
router.get("/", getSpecialties);
router.put("/:id", updateSpecialty);
router.delete("/:id", deleteSpecialty);
 
module.exports = router;