const mongoose = require("mongoose");
 
const appointmentSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
 
    specialty: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Specialty",
      required: true,
    },
 
    date: { type: Date, required: true },
 
    reason: String,
 
    status: {
      type: String,
      enum: ["pendiente", "confirmada", "cancelada"],
      default: "pendiente",
    },
  },
  { timestamps: true }
);
 
module.exports = mongoose.model("Appointment", appointmentSchema);
 