const express = require('express');
const router = express.Router()
const {getAllPosts, updatePost, createPost, deletePost} = require ('../controllers/homeController.js');
const {registerUser, loginUser, logout} = require ('../controllers/UserController.js');


/* GET home page. */
router.get('/', getAllPosts);

/*  */
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

//Register y login CRUD
router.post('/login', registerUser);
router.get('/login', loginUser);

//Logout
router.get('/logout', logout)

module.exports = router;
