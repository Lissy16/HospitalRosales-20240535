const Patient = require("../models/patients");
const bcrypt = require("bcryptjs");
const generateJWT = require("../utils/generateJWT");
 
const loginPatientController = async (req, res) => {
  try {
    const { email, password } = req.body;
 
    const patient = await Patient.findOne({ email });
 
    if (!patient) return res.status(404).json({ msg: "Usuario no existe" });
 
    if (!patient.isVerified) {
      return res.status(400).json({ msg: "Usuario no verificado" });
    }
 
    const validPassword = await bcrypt.compare(password, patient.password);
 
    if (!validPassword) {
      return res.status(400).json({ msg: "Contraseña incorrecta" });
    }
 
    const token = generateJWT(patient._id);
 
    res.json({
      msg: "Login exitoso",
      token,
      patient,
    });
 
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
 
module.exports = loginPatientController;
 