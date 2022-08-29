// Requerimos modelos de la tablas de la BDD
const userModel = require('../models/UserModel.js');
const postModel = require('../models/PostModel.js');
const commentModel = require('../models/CommentModel.js');
const associations = require('../database/associations.js');
const jwt = require('jsonwebtoken')
const {promisify} = require('util')


// Configuramos controllers para definir que usuario hizo cada post
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await associations.PostModel.findAll({
            include: [{
                model: associations.UserModel,
                association: "users",
                attributes: ['id', 'user']
            }, {
                model: associations.CommentModel,
                association: "comments",
                attributes: ['id', 'content', 'likes', 'images', 'postId', 'usersId']
            }], attributes: ["id", "content", "likes", "image", "createdAt", "usersId"]
        });
        res.json(posts);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Configuramos crear, actualizar y eliminar posts
exports.createPost = async (req, res) => {
    const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
    const users = await userModel.findAll({
        where: { id: decodificada.id }
    })
    req.user = users[0].id
    console.log(req.user)
    try {
        await postModel.create({
            image: req.body.image,
            content: req.body.content,
            usersId: req.user,
        })
        res.json({ "message": "Post created successfully" });
    } catch (error) {
        res.json({ message: error.message });
    }
};


//Metodo para actualizar un post de usuario verificando que el id del usuario que esta logueado sea igual al userId(llave foranea del post).
exports.updatePost = async (req, res) => {
    const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
    const users = await userModel.findAll({
        where: { id: decodificada.id }
    })
    const posts = await postModel.findAll({
        where: { id: req.params.id }
    })
    req.user = users[0].id
    req.postsUser = posts[0].usersId
    console.log(req.user)
    console.log(req.postsUser)
    if(req.user == req.postsUser) {
    try {
        await postModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({ "message": "Post updated succesfully" });
    } catch (error) {
        res.json({ message: error.message });
    }
    } else {
        console.log("no podes negri")
        res.json({mensaje:"q haces loro"})
    }
}

exports.deletePost = async (req, res) => {
    const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
    const users = await userModel.findAll({
        where: { id: decodificada.id }
    })
    const posts = await postModel.findAll({
        where: { id: req.params.id }
    })
    req.user = users[0].id
    req.postsUser = posts[0].usersId
    console.log(req.user)
    console.log(req.postsUser)
    if(req.user == req.postsUser) {
    try {
        await postModel.destroy({
            where: { id: req.params.id }
        })
        res.json({ "message": "Post deleted succesfully" })
    } catch (error) {
        res.json({ message: error.message });
    }
} else {
    console.log("no podes negri")
    res.json({mensaje:"q haces loro"})
}
};