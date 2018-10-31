'use strict';
module.exports = (sequelize, DataTypes) => {
  const uploadData = sequelize.define('uploadData', {
    name: DataTypes.STRING,
    filepath: DataTypes.STRING
  }, {});
  uploadData.associate = function(models) {
    // associations can be defined here
  };
  return uploadData;
};