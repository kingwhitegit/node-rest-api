module.exports = (sequelize, Sequelize) => {
	const user = sequelize.define('user', {
	  firstname: {
			type: Sequelize.STRING
	  },
	  lastname: {
			type: Sequelize.STRING
	  },
	  ps: {
		  type: Sequelize.STRING
	  },
	});
	return user;
}