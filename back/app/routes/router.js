const { Router } = require('express');
var express = require('express');
var router = express.Router();
const getAllUsers = require ('../controllers/homeController.js');
const createPost = require('../controllers/homeController.js');
const getAllPosts = require('../controllers/homeController.js');
const updatePost = require('../controllers/homeController.js');
const deletePost = require('../controllers/homeController.js');

/* GET home page. */
router.get('/', {getAllUsers, getAllPosts});

/*  */
router.post('/', createPost);
router.put('/', updatePost);
router.delete('/', deletePost);

module.exports = router;
