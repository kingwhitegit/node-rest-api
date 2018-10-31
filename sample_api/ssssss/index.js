const express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();
var users = [
   {id: 101, name: "kimmm", password: "asd111"},
   {id: 102, name: "rim", password: "asd111"},
   {id: 103, name: "choe", password: "asd111"},
   {id: 104, name: "hong", password: "asd111"},
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
//router///////
app.get('/users', function(req, res){
   res.json(users);
});

app.delete('/users/:id', function(req, res){
   var delnum = users.map(function(user){
      return user.id;
   }).indexOf(parseInt(req.params.id));
    users.splice(delnum, 1);
    res.json(users);
});

app.post('/users', function(req, res){
    const { name, password } = req.body//dry
    var req_id = users[users.length-1].id+1;
    users.push({
        id: req_id,
        name,
        password,
    });
    console.log(req.params.id);
    res.json(users);
});

app.put('/users/:id', function(req, res){
    var putnum = users.map(function(user){
      return user.id;
    }).indexOf(parseInt(req.params.id));
    users[putnum]={
        id: req.params.id,
        name: req.body.name,
        password: req.body.password
    }
    res.json(users);
});

app.listen(3000);