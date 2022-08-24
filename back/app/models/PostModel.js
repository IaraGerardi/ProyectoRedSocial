const db = require('../database/db.js');
const { DataTypes } = require('sequelize');

const PostModel = db.define('posts',{
    content: {types: DataTypes.STRING},
    likes: {types: DataTypes.INTEGER},
    image: {types: DataTypes.STRING}
})

module.exports = PostModel;