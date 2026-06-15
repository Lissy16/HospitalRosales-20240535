const Specialty = require("../models/specialties");
 
// CREAR ESPECIALIDAD
const createSpecialty = async (req, res) => {
  try {
    const specialty = await Specialty.create(req.body);
    res.json({ msg: "Especialidad creada", specialty });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
 
// VER TODAS
const getSpecialties = async (req, res) => {
  try {
    const specialties = await Specialty.find();
    res.json(specialties);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
 
// ACTUALIZAR
const updateSpecialty = async (req, res) => {
  try {
    const specialty = await Specialty.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
 
    if (!specialty) {
      return res.status(404).json({ msg: "No existe especialidad" });
    }
 
    res.json({ msg: "Actualizada", specialty });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
 
// ELIMINAR
const deleteSpecialty = async (req, res) => {
  try {
    const specialty = await Specialty.findByIdAndDelete(req.params.id);
 
    if (!specialty) {
      return res.status(404).json({ msg: "No existe especialidad" });
    }
 
    res.json({ msg: "Eliminada" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
 
module.exports = {
  createSpecialty,
  getSpecialties,
  updateSpecialty,
  deleteSpecialty,
};