const CommentModel = require('../models/CommentModel.js');
const PostModel = require('../models/PostModel.js');
const UserModel = require('../models/UserModel.js');


//relacion 1 a muchos

// 1 POST PUEDE TENER MUCHOS COMENTARIOS
PostModel.hasMany(CommentModel, { foreignKey: 'postId' });//1 usuario / muchos post
// 1 COMENTARIO PERTENECE A 1 POST
CommentModel.belongsTo(PostModel, {as: "comments", foreignKey: 'postId'}); //se añade una clave userId al tabla post


// 1 USUARIO PUEDE TENER MUCHOS POSTS
UserModel.hasMany(PostModel, { foreignKey: 'usersId' });//1 usuario / muchos post
// 1 POST PERTENECE A 1 USUARIO
PostModel.belongsTo(UserModel, {as: "users", foreignKey: 'usersId'}); //se añade una clave userId al tabla post


module.exports = {CommentModel, PostModel, UserModel};