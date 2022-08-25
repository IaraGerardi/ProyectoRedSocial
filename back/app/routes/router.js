const express = require('express');
const router = express.Router()
const {getAllUsers, getAllPosts, updatePost, createPost, deletePost} = require ('../controllers/homeController.js');

/* GET home page. */
router.get('/', getAllPosts);

/*  */
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;
