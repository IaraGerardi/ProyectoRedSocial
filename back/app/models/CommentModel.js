const db = require('../database/db.js');
const { DataTypes } = require('sequelize');

const CommentModel = db.define('posts',{
    content: {type: DataTypes.STRING},
    likes: {type: DataTypes.INTEGER},
    image: {type: DataTypes.STRING}
})

module.exports = CommentModel;