const Patient = require("../models/patients");
 
const verifyPatientController = async (req, res) => {
  try {
    const { email, code } = req.body;
 
    const patient = await Patient.findOne({ email });
 
    if (!patient) return res.status(404).json({ msg: "No existe usuario" });
 
    if (patient.verificationCode !== code) {
      return res.status(400).json({ msg: "Código incorrecto" });
    }
 
    patient.isVerified = true;
    patient.verificationCode = "";
    await patient.save();
 
    res.json({ msg: "Usuario verificado correctamente" });
 
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
 
module.exports = verifyPatientController;