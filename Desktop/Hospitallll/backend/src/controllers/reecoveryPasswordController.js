const Patient = require("../models/patients");
const sendEmail = require("../utils/sendEmail");
const bcrypt = require("bcryptjs");
 
const recoveryPasswordController = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
 
    const patient = await Patient.findOne({ email });
 
    if (!patient) return res.status(404).json({ msg: "No existe usuario" });
 
    const hashed = await bcrypt.hash(newPassword, 10);
 
    patient.password = hashed;
    await patient.save();
 
    await sendEmail(
      email,
      "Recuperación de contraseña",
      `<h1>Tu contraseña fue actualizada correctamente</h1>`
    );
 
    res.json({ msg: "Contraseña actualizada" });
 
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
 
module.exports = recoveryPasswordController;