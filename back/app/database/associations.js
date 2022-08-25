const CommentModel = require('../models/CommentModel.js');
const PostModel = require('../models/PostModel.js');
const UserModel = require('../models/UserModel.js');

//relacion 1 a muchos
UserModel.hasMany(PostModel, {  foreignKey: 'usersId' });//1 usuario / muchos post
PostModel.belongsTo(UserModel, { as: 'user', foreignKey: 'usersId'}); //se añade una clave userId al tabla post

PostModel.hasMany(CommentModel, {  foreingKey: 'postId' });//1 post / muchos comments
CommentModel.belongsTo(PostModel, { as: 'publicacion', foreignKey: 'postId' }); //se añade una clave postId al tabla post

UserModel.hasMany(CommentModel, {as: 'publicacion',  foreignKey: 'usersId' });
CommentModel.belongsTo(UserModel, {as: 'user',  foreignKey: 'usersId' });