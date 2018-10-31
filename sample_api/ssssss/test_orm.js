const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const Sequelize = require('sequelize');
const app = express();

//app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

//Require the Router we defined in users.js
const users = require('./router.js');

//Use the Router on the sub route /users
app.use('/users', users);

// const sequelize = new Sequelize({
//   database: 'mydb',
//   username: 'root',
//   password: null,
//   dialect: 'mysql'
// });
// sequelize.query("SELECT * FROM users").then(myTableRows => {
//   console.log(myTableRows)
// })
port = process.env.PORT || 3000;
app.listen(port);
