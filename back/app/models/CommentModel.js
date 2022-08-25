const db = require('../database/db.js');
const { DataTypes } = require('sequelize');

const CommentModel = db.define('comments',{
    content: {type: DataTypes.STRING},
    likes: {type: DataTypes.INTEGER},
    image: {type: DataTypes.STRING}
})

module.exports = CommentModel;