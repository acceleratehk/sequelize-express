'use strict';
module.exports = function(sequelize, DataTypes) {
  var project = sequelize.define('project', {
    name: DataTypes.STRING
  })
  project.associate = function(models) {
        // associations can be defined here
  };
  return project;
};