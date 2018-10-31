const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./route/user.route.js');
const db = require('./models');

const app = express();
const port = process.env.PORT || 8080;
//force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }');
// });

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

// Create a Server
app.listen(port,()=>{
    db.sequelize.sync();
});