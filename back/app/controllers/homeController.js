// Requerimos modelos de la tablas de la BDD
const userModel = require('../models/UserModel.js');
const postModel = require('../models/PostModel.js');

// Configuramos controllers
exports.getAllUsers = async (req, res) => {
    try {
        const users = userModel.findAll()
        res.json(users);
    } catch (error) {
        res.json({message: error.message});
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const posts = postModel.findAll()
        res.json(posts);
    } catch (error) {
        res.json({message: error.message});
    }
};

exports.createPost = async (req, res) => {
    try {
        await postModel.create(req.body)
        res.json({"message": "Post created successfully"});
    } catch (error) {
        res.json({message: error.message});
    }
};

exports.updatePost = async (req, res) => {
    try {
        await postModel.update(req.body, {
            where: {id: req.params.id}
        })
    } catch (error) {
        res.json({message: error.message});
    }
}

exports.deletePost = async (req, res) => {
    try {
        await postModel.destroy({
            where: {id: req.params.id}
        })
        res.json({'message' : 'Post deleted succesfully'})
    } catch (error) {
        res.json({message: error.message});
    }
};