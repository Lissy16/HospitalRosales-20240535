const express = require("express");
const cors = require("cors");
 
const app = express();
 
app.use(cors());
app.use(express.json());
 
app.use("/api/register", require("./src/routes/registerPatient"));
app.use("/api/verify", require("./src/routes/verifyPatient"));
app.use("/api/logout", require("./src/routes/logout"));
app.use("/api/recovery", require("./src/routes/recoveryPassword"));
 
app.use("/api/patients", require("./src/routes/patients"));
app.use("/api/specialties", require("./src/routes/specialties"));
app.use("/api/appointments", require("./src/routes/appointments"));
app.use("/api/equipments", require("./src/routes/equipments"));
 
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "Error en el servidor" });
});
 
module.exports = app;
 