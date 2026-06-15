const mongoose = require("mongoose");
 
const medicalRecordSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
 
    diagnosis: String,
    treatment: String,
    notes: String,
 
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
 
module.exports = mongoose.model("MedicalRecord", medicalRecordSchema);