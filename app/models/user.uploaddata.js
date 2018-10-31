module.exports = (sequelize, Sequelize) => {
	const data = sequelize.define('uploaddata', {
	  name: {
		  type: Sequelize.STRING
	  },
	  url: {
		  type: Sequelize.STRING
	  },
	});
	return data;
}