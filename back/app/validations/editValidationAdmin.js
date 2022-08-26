const { check, body } = require('express-validator');
const UserModel = require("../models/UserModel.js")

const editValidationAdmin = [
   check("userEditAdmin").isLength({ min: 5 }).withMessage("El Campo user debe estar completo con un minimo de 5 caracteres"),
   check("passwordEditAdmin").isLength({ min: 8 }).withMessage("La contraseña debe estar completo con un minimo de 8 caracteres"),
   check("emailEditAdmin").isEmail().withMessage("El email no tiene un formato correcto."),
   body("userEditAdmin").custom(value => {
      return UserModel.findOne({
         where: {
            user: value
         }
      }).then(result => {
         if (result) {
            return Promise.reject('Error el usuario ya esta registrado')
         }
      })
   }),
   body("emailEditAdmin").custom(value => {
      return UserModel.findOne({
         where: {
            email: value
         }
      }).then(result => {
         if (result) {
            return Promise.reject('Error el email ya esta registrado')
         }
      })
   })
]

module.exports = editValidationAdmin
