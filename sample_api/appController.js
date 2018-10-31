'use strict';
var user = require('../models/appModel.js');
exports.list_all_users = function(req, res) {
  user.getAlluser(function(err, user) {
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', user);
    res.send(user);
  });
};

exports.create_a_user = function(req, res) {
    
  //  console.log(req.body.ps);
    var new_user = new user(req.body);
  //handles null error 
    if(!new_user.user || !new_user.ps){
            res.status(400).send({ error:true, message: 'Please provide user/status' });
        }
    else{
        user.createuser(new_user, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
        });
    }
};

exports.read_a_user = function(req, res) {
    user.getuserById(req.params.userId, function(err, user) {
      console.log(req.params.userId);
    if (err)
      res.send(err);
    res.json(user);
    });
};

exports.update_a_user = function(req, res) {
  user.updateById(req.params.userId, new user(req.body), function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'user successfully updated'});
  });
};

exports.delete_a_user = function(req, res) {
  user.remove( req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'user successfully deleted'});
  });
};

exports.uploadfile = function(req, res) {
  console.log(req.file);
  const filepath=req.protocol+'://'+req.domain+'/'+req.file.filename;
  user.uploadFile(filepath, function(err, user){
    if (err)
       res.send(err);
    res.json({ message: 'user successfully uploaded'});
   });
};