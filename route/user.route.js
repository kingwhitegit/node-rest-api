const express = require('express');
const router = express.Router();
const users = require('../controller/user.controller.js');
const upload1 = require('../controller/upload');

// Retrieve all user
router.get('/api/users', users.findAll);
 
// Retrieve a single user by Id
router.get('/api/users/:userId', users.findById);
 
// Update a user with Id
router.put('/api/users/:userId', users.update);
 
// Delete a user with Id
router.delete('/api/users/:userId', users.delete);

// Create a new user
router.post('/api/users', users.create);

// upload a file
router.post('/upload', upload1.single('avatar'), users.upload);
    
module.exports = router;
