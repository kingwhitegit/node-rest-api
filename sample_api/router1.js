'use strict';
module.exports = function(app) {
    const multer = require('multer');
    const storage=multer.diskStorage({
        destination: './public/uploads/',
        filename: function(req, file, cb){
            cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
        }
    });
    const upload = multer({storage : storage});

    const todoList = require('../controllers/appController.js');

  //  Routes
    app.route('/users')
        .get(todoList.list_all_users)
        .post(todoList.create_a_user);
   
    app.route('/users/:userId')
        .get(todoList.read_a_user)
        .put(todoList.update_a_user)
        .delete(todoList.delete_a_user);
    
    app.route('/upload')
        .post(upload.single('avatar'), todoList.uploadfile);
};

