const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database")

class Topic extends Model { }
Topic.init({
  name: DataTypes.STRING,
  level: DataTypes.INTEGER,
  date: DataTypes.STRING,
}, { sequelize, modelName: 'topic' })

module.exports = Topic