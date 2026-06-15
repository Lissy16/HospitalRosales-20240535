const mongoose = require("mongoose");
 
const equipmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
 
    status: {
      type: String,
      enum: ["disponible", "en uso", "mantenimiento"],
      default: "disponible",
    },
 
    quantity: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);
 
module.exports = mongoose.model("Equipment", equipmentSchema);