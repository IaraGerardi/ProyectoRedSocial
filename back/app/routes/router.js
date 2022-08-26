const express = require('express');
const router = express.Router()
const loginValidation = require("../validations/loginValidation.js")
const registerValidation = require("../validations/registerValidation.js")
const {getAllPosts, updatePost, createPost, deletePost} = require ('../controllers/homeController.js');
const {registerUser, loginUser, logout, isAuthenticated, userLogged} = require ('../controllers/UserController.js');
const { getAllUserAdmin, updateUserAdmin, deleteUserAdmin } = require('../controllers/adminController.js');


/* GET home page. */
router.get('/', /* isAuthenticated, */ getAllPosts);

/*  */
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

//Register y login CRUD
router.post('/login', registerValidation, userLogged, registerUser);
router.get('/login', loginValidation, userLogged, loginUser);

//Logout
router.get('/logout', logout);

//Profile
router.put('/profile', isAuthenticated, updateUser)

//Ruta admin. Todos los usuarios, editar, borrar.
router.get('/allUsers', getAllUserAdmin); //Obtener todos los usuarios
router.put('/allUsers/:id', updateUserAdmin); //modificar usuario por ID
router.delete('/allUsers/:id', deleteUserAdmin); //Eliminar usuario por ID

module.exports = router;
