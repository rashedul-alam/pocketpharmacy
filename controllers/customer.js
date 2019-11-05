var express = require('express');

var userReports = require('./../models/user-reports');
var inventoryModel = require('./../models/inventory-model');
var userModel = require('./../models/user-model');
var prescripsion = require('./../models/prescription-model');
var customerhistoryModel = require('./../models/customerhistory-model');
var router = express.Router();
//var io = require('socket.io') ;

router.get('*', function(request, response, next) {

    if (request.cookies['username'] != null) {
        next();
    } else {
        response.redirect('/logout');
    }

});


router.get('/', function(request, response) {
    console.log("customer index");
    inventoryModel.getAll(function(result) {
        console.log("product list get all");
        response.render('customer/index', { product: result, username: request.session.username, email: request.session.email });
    });
    //response.render('customer/index', { username: request.session.username, email: request.session.email });

});
// router.get('/details/:email', function(request, response) {
//     console.log("details");
//     userModel.getByEmail(request.params.email, function(result) {
//         response.render("admin/details", result);
//     })
// });
router.get('/history/:email', function(request, response) {

    customerhistoryModel.getByEmail(request.params.email, function(result) {
        console.log(result);

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



        response.render('customer/chat', result);
        // io.sockets.on('connection', function(socket){
        // console.log('Socket Connected...');
        // console.log(result);
        //  socket.on('email', function(data, callback);


    });

});


// router.get('/history/:email', function(request, response) {
// console.log("history get");

//  userModel.getByEmail(request.params.email, function(result) {
//   console.log('result');



// response.render('customer/history', result);
// io.sockets.on('connection', function(socket){
// console.log('Socket Connected...');
// console.log(result);
//  socket.on('email', function(data, callback);


// });

// });
router.get('/reports/:email', function(request, response) {

    response.render('customer/reports');
});

router.post('/reports/:email', function(request, response) {
    console.log("RE get");

    userReports.insert(request.params.email, function(result) {
        console.log('result');



        var user = {

            email: request.params.email,
            reports: request.body.reports,

            type: request.session.type
        };
        console.log(user);
        userReports.insert(user, function(status) {
            if (status) {
                console.log("success in");

                response.redirect('/customer');
            } else {
                response.redirect('/customer');
            }
        });







    });

});
router.get('/uploadprescription/:email', function(request, response) {

    response.render('customer/uploadprescription');
});

router.post('/uploadprescription/:email', function(request, response) {
    console.log("RE get pres");

    customerhistoryModel.update(request.params.email, function(result) {
        console.log('result');



        var user = {

            email: request.params.email,
            prescription: request.body.prescription,

            type: request.session.type
        };
        console.log(user);
        userReports.insert(user, function(status) {
            if (status) {
                console.log("success in");

                response.redirect('/customer');
            } else {
                response.redirect('/customer');
            }
        });







    });

});

router.get('/doctorlist/:email', function(request, response) {
    console.log("doctor list");

    userModel.getAll(function(result) {
        console.log("userlist get all");
        response.render('customer/doctorlist', { user: result });
    });
});


module.exports = router;