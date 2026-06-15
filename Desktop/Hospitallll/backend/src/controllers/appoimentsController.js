const Appointment = require("../models/appointments");
 
// CREAR CITA
const createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
 
    res.json({
      msg: "Cita creada correctamente",
      appointment,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
 
// VER TODAS LAS CITAS
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("patient", "name email")
      .populate("specialty", "name");
 
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
 
// ACTUALIZAR CITA
const updateAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
 
    if (!appointment) {
      return res.status(404).json({ msg: "No existe la cita" });
    }
 
    res.json({ msg: "Cita actualizada", appointment });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
 
// ELIMINAR CITA
const deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
 
    if (!appointment) {
      return res.status(404).json({ msg: "No existe la cita" });
    }
 
    res.json({ msg: "Cita eliminada" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
 
module.exports = {
  createAppointment,
  getAppointments,
  updateAppointment,
  deleteAppointment,
};