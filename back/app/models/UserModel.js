const db = require('../database/db.js');
const { DataTypes } = require('sequelize');

const UserModel = db.define('users',{
    user: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    avatar: {type: DataTypes.STRING},
    rol: {type: DataTypes.STRING},
})

module.exports = UserModel;