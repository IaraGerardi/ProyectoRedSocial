const express = require('express');
const router = express.Router()
const loginValidation = require("../validations/loginValidation.js")
const registerValidation = require("../validations/registerValidation.js")
const editValidation = require("../validations/editValidation.js")
const editValidationAdmin = require("../validations/editValidationAdmin.js")
const {getAllPosts, updatePost, createPost, deletePost, createComment, updateComment, deleteComment, getPost} = require ('../controllers/homeController.js');
const { registerUser, loginUser, logout, isAuthenticated, userLogged, updateUser, getUserEdit, userToProfile } = require ('../controllers/UserController.js');
const { getAllUserAdmin, updateUserAdmin, deleteUserAdmin, getUserAdmin } = require('../controllers/adminController.js');
const  userImage  = require("../middleware/userImages.js")


//Register y login CRUD
router.post('/login', registerValidation, registerUser);
/* router.get('/login', loginValidation, userLogged, loginUser); */
router.post('/logines', loginValidation, loginUser);



/* GET home page. */
router.get('/home', getAllPosts);
router.get('/home/:id', getPost);

// CRUD Home posts
router.post('/home/', createPost);
router.put('/home/:id', updatePost);
router.delete('/home/:id', deletePost);

// CRUD Home Comments posts
router.post('/comments/:userId/:postId', createComment);
router.put('/comments/:id', updateComment);
router.delete('/comments/:id', deleteComment);


//Logout
router.get('/logout', logout);


//Profile
router.get('/profile/:user', /* isAuthenticated, userToProfile, */ getUserEdit)
router.put('/profile/:user', userImage.any(),/*  isAuthenticated, */ editValidation, updateUser)



//Ruta admin. Todos los usuarios, editar, borrar.
router.get('/allUsers', getAllUserAdmin); //Obtener todos los usuarios
router.get('/allUsers/:id', getUserAdmin);
router.put('/allUsers/:id', userImage.any()/* , editValidationAdmin */, updateUserAdmin); //modificar usuario por ID
router.delete('/allUsers/:id', deleteUserAdmin); //Eliminar usuario por ID


module.exports = router;