'user strict';
const sql = require('./db.js');

//user object constructor
var user = function(us){
    this.user = us.user;
    this.ps = us.ps;
};
user.createuser = function createUser(newuser, result) {    
    sql.query("INSERT INTO users set ?", newuser, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else{
            result(null, res.id);
        }
    });           
};
user.getuserById = function createUser(userId, result) {
    sql.query("Select * from users where id = ? ", userId, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else{
            result(null, res);
        }
    });   
};
user.getAlluser = function getAlluser(result) {
    sql.query("Select * from users", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else{
            console.log('users : ', res);  
            result(null, res);
        }
    });   
};
user.updateById = function(id, user, result){
    sql.query("UPDATE users SET user = ?, ps = ? WHERE id = ?", [user.user,user.ps, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
             result(null, err);
        } else{   
            result(null, res);
        }
    }); 
};
user.remove = function(id, result){
    sql.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else{
            result(null, res);
        }
    }); 
};
user.uploadFile = function(filepath, result){
    sql.query("INSERT INTO upload set filepath=?", filepath, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else{
            result(null, res.id);
        }
    });
};


module.exports= user;