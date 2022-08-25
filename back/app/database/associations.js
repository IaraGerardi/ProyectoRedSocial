const CommentModel = require('../models/CommentModel.js');
const PostModel = require('../models/PostModel.js');
const UserModel = require('../models/UserModel.js');

//relacion 1 a muchos
UserModel.hasMany(PostModel, { foreignKey: 'usersId' });//1 usuario / muchos post
PostModel.belongsTo(UserModel, {as: "users", foreignKey: 'usersId'}); //se añade una clave userId al tabla post

/* PostModel.hasMany(CommentModel, { foreingKey: 'postId' });//1 post / muchos comments
CommentModel.belongsTo(PostModel, {as: "asd", foreignKey: 'postId' }); //se añade una clave postId al tabla post
 */

/* UserModel.hasMany(CommentModel, { foreignKey: 'usersId' });
CommentModel.belongsTo(UserModel, {as: "comentarios",  foreignKey: 'usersId' });
 */

CommentModel.hasMany(PostModel, { foreingKey: 'Id' });//1 post / muchos comments
PostModel.belongsTo(CommentModel, {as: "comment", foreignKey: 'Id' }); //se añade una clave postId al tabla post


module.exports = {CommentModel, PostModel, UserModel};