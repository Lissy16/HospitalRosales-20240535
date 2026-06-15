const jwt = require("jsonwebtoken");

const generateJWT = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{
        expirexIn:"7d",
    })
    
} 

module.exports = generateJWT;