const express = require('express');
const router = express.Router();
//const Sequelize = require('sequelize');

const users = [
   {id: 101, name: "aaa", ps: "aaa111"},
   {id: 102, name: "bbb", ps: "bbb111"},
   {id: 103, name: "ccc", ps: "ccc111"},
   {id: 104, name: "ddd", ps: "ddd111"},
];

//sequelize
// const sequelize = new Sequelize({
//   database: 'mydb',
//   username: 'root',
//   password: null,
//   dialect: 'mysql'
// });
// sequelize.query("SELECT * FROM users").then(myTableRows => {
//   console.log(myTableRows)
// })
////////////////////
router.get('/', function(req, res){
   res.json(users);
});
router.get('/:id([0-9]{3,})', function(req, res){
   var currUser = users.filter(function(user){
      if(user.id == req.params.id){
         return true;
      }
   });
   
   if(currUser.length === 1){
      res.json(currUser[0])
   } else {
      res.status(404);  //Set status to 404 as users was not found
      res.json({message: "Not Found"});
   }
});
router.post('/', function(req, res){
    var newId = users[users.length-1].id+1;
    users.push({
        id: newId,
        name: req.body.name,
        ps: req.body.ps,
    });
    res.json(users);
});

router.put('/:id', function(req, res) {
    //Gets us the index of user with given id.
    var updateIndex = users.map(function(user){
        return user.id;
    }).indexOf(parseInt(req.params.id));
    if(updateIndex === -1){
        //user not found, create new
        users.push({
        id: req.params.id,
        name: req.body.name,
        ps: req.body.ps,
        });
        res.json({
            message: "New user created.", location: "/users/" + req.params.id});
    } else {
        //Update existing user
        users[updateIndex] = {
            id: req.params.id,
            name: req.body.name,
            ps: req.body.ps,
        };
        res.json({message: "user id " + req.params.id + " updated.",
            location: "/users/" + req.params.id});
    }
});

router.delete('/:id', function(req, res){
   var removeIndex = users.map(function(user){
      return user.id;
   }).indexOf(parseInt(req.params.id)); //Gets us the index of movie with given id.
   if(removeIndex === -1){
      res.json({message: "Not found"});
   } else {
      users.splice(removeIndex, 1);
      res.send({message: "user id " + req.params.id + " removed."});
   }
});
module.exports = router;