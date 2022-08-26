const { check, body } = require('express-validator');
const UserModel = require("../models/UserModel.js")

const editValidation = [
   check("userEdit").isLength({ min: 5 }).withMessage("El Campo user debe estar completo con un minimo de 5 caracteres"),
   check("passwordEdit").isLength({ min: 8 }).withMessage("La contraseña debe estar completo con un minimo de 8 caracteres"),
   check("emailEdit").isEmail().withMessage("El email no tiene un formato correcto."),
   body("userEdit").custom(value => {
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
   body("emailEdit").custom(value => {
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

module.exports = editValidation
