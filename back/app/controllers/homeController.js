// Requerimos modelos de la tablas de la BDD
const userModel = require('../models/UserModel.js');
const postModel = require('../models/PostModel.js');
const commentModel = require('../models/CommentModel.js');
const associations = require('../database/associations.js');

// Configuramos controllers para definir que usuario hizo cada post
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await associations.PostModel.findAll({
            include: [{ 
                model: associations.UserModel,
                association: "users",
                attributes: ['id', 'user']
                },{
                    model: associations.CommentModel,
                    association: "comments",
                    attributes: ['id','content', 'likes', 'images', 'postId', 'usersId']                
                }], attributes: ["id" ,"content", "likes", "image", "createdAt", "usersId"]
        });
        res.json(posts);
    } catch (error) {
        res.json({message: error.message});
    }
};

// Configuramos crear, actualizar y eliminar posts
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
        res.json({"message": "Post updated succesfully"});
    } catch (error) {
        res.json({message: error.message});
    }
}

exports.deletePost = async (req, res) => {
    try {
        await postModel.destroy({
            where: {id: req.params.id}
        })
        res.json({"message" : "Post deleted succesfully"})
    } catch (error) {
        res.json({message: error.message});
    }
};