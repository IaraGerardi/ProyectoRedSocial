const express = require('express');
const router = express.Router()
const {getAllUsers, getAllPosts, updatePost, createPost, deletePost} = require ('../controllers/homeController.js');

/* GET home page. */
router.get('/', getAllUsers, getAllPosts);

/*  */
router.post('/', createPost);
router.put('/', updatePost);
router.delete('/', deletePost);

module.exports = router;
