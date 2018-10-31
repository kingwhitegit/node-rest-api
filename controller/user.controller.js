const db = require('../models');
const upload = require('./upload');
const user = db.users;
const dataupload = db.uploadData;
// Post a user
exports.create = (req, res) => {
	const { firstname, lastname, ps } = req.body;
	// Save to MySQL database
	user.create({
	  firstname,
	  lastname,
	  ps,
	}).then(user => {
		// Send created user to client
		res.send(user);
		console.log(req.body.ps);
	});
};

// FETCH all users
exports.findAll = (req, res) => {
	user.findAll().then(users => {
	  // Send all users to Client
	  res.send(users);
	});
};

// Find a user by Id
exports.findById = (req, res) => {
	user.findById(req.params.userId).then(user => {
		res.send(user);
	})
};
 
// Update a user
exports.update = (req, res) => {
	const id = req.params.userId;
	const { firstname, lastname, ps } = req.body;
	user.update( { 
		firstname, 
		lastname, 
		ps,
	}, 
	{
		where: {id}
	}).then(() => {
		res.status(200).send("updated successfully a user with id = " + id);
	});
};
 
// Delete a user by Id
exports.delete = (req, res) => {
	const id = req.params.userId;
	user.destroy({
	  where: { id }
	}).then(() => {
	  res.status(200).send('deleted successfully a user with id = ' + id);
	});
};

exports.upload = (req, res) => {
	// Save to MySQL database
	const filepath = `${req.protocol}://${req.domain}/${req.file.filename}`;
	dataupload.create({
	  name: req.body.name,
	  url: filepath,
	}).then(user => {
		// Send created user to client
		res.send(user);
		console.log(filepath);
	});
}