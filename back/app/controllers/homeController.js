// Requerimos modelos de la tablas de la BDD
const userModel = require('./models/usersModel');
const postModel = require('./models/postsModel');

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
        res.json({"message": "Register created successfully"});
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