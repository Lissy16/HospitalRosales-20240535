const mongoose = require("mongoose");
 
const patientSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    age: Number,
    phone: String,
    address: String,
    isVerified: { type: Boolean, default: false },
    verificationCode: String,
  },
  { timestamps: true }
);
 
module.exports = mongoose.model("Patient", patientSchema);