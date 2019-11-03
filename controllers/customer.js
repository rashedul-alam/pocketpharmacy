var express = require('express');
var userModel = require('./../models/user-model');
var customerhistoryModel = require('./../models/customerhistory-model');
var router = express.Router();
var io = require('socket.io') ;

router.get('*', function(request, response, next) {

    if (request.cookies['username'] != null) {
        next();
    } else {
        response.redirect('/logout');
    }

});


router.get('/', function(request, response) {
    console.log("customer index");
    response.render('customer/index', { username: request.session.username, email: request.session.email });
});
// router.get('/details/:email', function(request, response) {
//     console.log("details");
//     userModel.getByEmail(request.params.email, function(result) {
//         response.render("admin/details", result);
//     })
// });
router.get('/history/:email', function(request, response) {

    customerhistoryModel.getByEmail(request.params.email, function(result) {
        
        response.render('customer/history', result);
    });

});
router.get('/details/:email', function(request, response) {

    userModel.getByEmail(request.params.email, function(result) {
        
        response.render('customer/details', result);
    });

});

router.get('/edit/:email', function(request, response) {
    console.log("edit get");

    userModel.getByEmail(request.params.email, function(result) {
        response.render('customer/edit', result);
    });

});

router.post('/edit/:email', function(request, response) {
    console.log("edit post");
    var user = {
        username: request.body.username,
        password: request.body.password,
        email: request.params.email,
        phone: request.body.phone,
        address: request.body.address,

    };

    userModel.update(user, function(status) {

        if (status) {
            response.redirect('../details/' + request.params.email);
        } else {
            response.redirect('/customer/edit/' + request.params.email);
        }
    });

});
router.get('/chat/:email', function(request, response) {
    console.log("chat get");

    userModel.getByEmail(request.params.email, function(result) {
        console.log('result');

       
        
        response.render('customer/chat',result );
       // io.sockets.on('connection', function(socket){
              // console.log('Socket Connected...');
              // console.log(result);
             //  socket.on('email', function(data, callback);
   

     });
    
      }); 
        

router.get('/history/:email', function(request, response) {
    console.log("history get");

    userModel.getByEmail(request.params.email, function(result) {
        console.log('result');

       
        
        response.render('customer/history',result );
       // io.sockets.on('connection', function(socket){
              // console.log('Socket Connected...');
              // console.log(result);
             //  socket.on('email', function(data, callback);
   

     });
    
      }); 
        




module.exports = router;