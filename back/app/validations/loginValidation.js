const { check } = require('express-validator');

const loginValidation = [
    check("userLog").isLength({min:5}).withMessage("El Campo user debe estar completo con un minimo de 5 caracteres"),
    check("passwordLog").isLength({min:8}).withMessage("La contraseña debe estar completo con un minimo de 8 caracteres"),
    check("emailLog").isEmail().withMessage("El email no tiene un formato correcto."),
]

module.exports = loginValidation