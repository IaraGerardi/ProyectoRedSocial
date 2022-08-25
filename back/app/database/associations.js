const CommentModel = require('../models/CommentModel.js');
const PostModel = require('../models/PostModel.js');
const UserModel = require('../models/UserModel.js');

//relacion 1 a muchos
UserModel.hasMany(PostModel, {  foreingKey: 'usersId' });//1 usuario / muchos post
PostModel.belongsTo(UserModel), { as: 'user', foreingKey: 'usersId'}; //se añade una clave userId al tabla post

PostModel.hasMany(CommentModel, {  foreingKey: 'postId' });//1 post / muchos comments
CommentModel.belongsTo(PostModel, { as: 'publicacion', foreingKey: 'postId' }); //se añade una clave postId al tabla post

UserModel.hasMany(CommentModel, {  foreingKey: 'usersId' });
CommentModel.belongsTo(UserModel, {  foreingKey: 'usersId' })