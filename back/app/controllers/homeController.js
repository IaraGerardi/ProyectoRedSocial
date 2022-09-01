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
                attributes: ['id', 'content', 'likes', 'image', 'postId', 'usersId']
            }], attributes: ["id", "content", "likes", "image", "createdAt", "usersId"]
        });
        res.json(posts);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Configuramos mostrar 1 post
exports.getPost = async (req, res) => {
    try {
        const post = await associations.PostModel.findOne({
            where: { id: req.params.id},
            include: [{
                model: associations.UserModel,
                association: "users",
                attributes: ['id', 'user']
            }, {
                model: associations.CommentModel,
                association: "comments",
                attributes: ['id', 'content', 'likes', 'image', 'postId', 'usersId']
            }], attributes: ["id", "content", "likes", "image", "createdAt", "usersId"]
        });
        res.json(post);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Configuramos crear, actualizar y eliminar posts
exports.createPost = async (req, res) => {
/*     const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
    const users = await userModel.findAll({
        where: { id: decodificada.id }
    })
    req.user = users[0].id
    console.log(req.user) */
    try {
        await postModel.create({
            image: req.body.image,
            content: req.body.content
        })
        res.json({ "message": "Post created successfully" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Metodo para crear un comentario en un post verificando coincidencia entre el creador del comentario y el post en el que se comentó
exports.createComment = async (req, res) => {
    try {
        await commentModel.create({
            image: req.body.image,
            content: req.body.content,
            postId: req.params.postId,
            usersId: req.params.userId
        })
        res.json({ "message": "comment created successfully" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

//Metodo para actualizar un post de usuario verificando que el id del usuario que esta logueado sea igual al userId(llave foranea del post).
exports.updatePost = async (req, res) => {
/*     const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
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
    if(req.user == req.postsUser) { */
    try {
        await postModel.update(req.body, {
            where: { 
                id: req.params.id
            }
        })
        res.json({ "message": "Post updated succesfully" });
    } catch (error) {
        res.json({ message: error.message });
    }
    } /* else {
        console.log("no podes negri")
        res.json({mensaje:"q haces loro"})
    }
} */

// Metodo para eliminar un post
exports.deletePost = async (req, res) => {
/*     const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
    const users = await userModel.findAll({
        where: { id: decodificada.id }
    })
    const posts = await postModel.findAll({
        where: { id: req.params.id }
    })
    req.user = users[0].id
    req.postsUser = posts[0].usersId
    if(req.user == req.postsUser) { */
    try {
        await postModel.destroy({
            where: { id: req.params.id }
        })
        res.json({ "message": "Post deleted succesfully" })
    } catch (error) {
        res.json({ message: error.message });
    }
}/*  else {
    console.log("no podes negri")
    res.json({mensaje:"q haces loro"})
}
}; */

/* Metodo para EDITAR un comment de un post */
exports.updateComment = async (req, res) => {
/*     const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
    const users = await userModel.findAll({
        where: { id: decodificada.id }
    })
    const comment = await commentModel.findAll({
        where: { id: req.params.id }
    })
    req.user = users[0].id
    req.commentUser = comment[0].usersId
    if (req.user == req.commentUser) { */
        try {
            await commentModel.update(req.body, {
                where: { id: req.params.id }      
            })
            res.json({ "message": "Comment updated succesfully" });
        } catch (error) {
            res.json({ message: error.message });
        }
    } /* else {
        console.log("no podes negri")
        res.json({ mensaje: "q haces loro" })
    }
} */

/* ELIMINAR */
exports.deleteComment = async (req, res) => {
/*     const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)
    const users = await userModel.findAll({
        where: { id: decodificada.id }
    })
    const comment = await commentModel.findAll({
        where: { id: req.params.id }
    })
    req.user = users[0].id
    req.commentUser = comment[0].usersId
    console.log(req.user)
    console.log(req.commentUser)
    if (req.user == req.commentUser) { */
        try {
            await commentModel.destroy({
                where: { id: req.params.id }
            })
            res.json({ "message": "Comment deleted succesfully" })
        } catch (error) {
            res.json({ message: error.message });
        }
    } /* else {
        console.log("no podes negri")
        res.json({ mensaje: "q haces loro" })
    }
}; */