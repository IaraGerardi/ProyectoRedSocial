const express = require('express');
const router = express.Router()
const loginValidation = require("../validations/loginValidation.js")
const registerValidation = require("../validations/registerValidation.js")
const {getAllPosts, updatePost, createPost, deletePost} = require ('../controllers/homeController.js');
const {registerUser, loginUser, logout, isAuthenticated} = require ('../controllers/UserController.js');


/* GET home page. */
router.get('/', /* isAuthenticated, */ getAllPosts);

/*  */
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

//Register y login CRUD
router.post('/login', registerValidation, registerUser);
router.get('/login', loginValidation, loginUser);

//Logout
router.get('/logout', logout)

module.exports = router;
