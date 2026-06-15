const Patient = require("../models/patients");
const bcrypt = require("bcryptjs");
 
// OBTENER TODOS LOS PACIENTES
const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find().select("-password");
    res.json(patients);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
 
// OBTENER UNO SOLO
const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id).select("-password");
 
    if (!patient) {
      return res.status(404).json({ msg: "Paciente no encontrado" });
    }
 
    res.json(patient);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
 
// ACTUALIZAR PACIENTE
const updatePatient = async (req, res) => {
  try {
    const { name, age, phone, address } = req.body;
 
    const patient = await Patient.findById(req.params.id);
 
    if (!patient) {
      return res.status(404).json({ msg: "Paciente no encontrado" });
    }
 
    patient.name = name || patient.name;
    patient.age = age || patient.age;
    patient.phone = phone || patient.phone;
    patient.address = address || patient.address;
 
    await patient.save();
 
    res.json({ msg: "Paciente actualizado", patient });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
 
//ELIMINAR PACIENTE
const deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
 
    if (!patient) {
      return res.status(404).json({ msg: "Paciente no encontrado" });
    }
 
    await patient.deleteOne();
 
    res.json({ msg: "Paciente eliminado" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
 
module.exports = {
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
};