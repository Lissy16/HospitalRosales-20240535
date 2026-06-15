const patient = require("../models/patients");
const bcrypt = require("../bcryptjs");
const sendEmail = require("../utils/sendEmail");

const registerPatientController = async (req,res)=>{
    try {
         const {name,email,password}= req.body;

        const exist = await patient.findOne({email});
        if(exist)return res.status(400).json({Message:"ya existe este usuario"});

        const hashedPassword = await bcrypt.hash(password,10);
        const code = Math.floor(100000 + Math.random()*900000).toString();

        const patient = await  patient.create({
            name,
            email,
            password:hashedPassword,
            verificationCode:code,
        });

        await sendEmail(
            email,
            "verificacion de cuenta",
            `<h1>Tu codigo es ${code}</h1>`
        )

        res.json({Message:"usuario registrado,revise su correo"});
    } catch (error) {
        res.status(500).json({Message:error.Message});
    }
};


module.exports= registerPatientController;


//estoy kiste 