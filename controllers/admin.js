var express = require('express');
var userModel = require('./../models/user-model');
var userReports = require('./../models/user-reports');
var customerhistoryModel = require('./../models/customerhistory-model');
var router = express.Router();

router.get('*', function(request, response, next) {

    if (request.cookies['username'] != null) {
        next();
    } else {
        response.redirect('/logout');
    }

});


router.get('/', function(request, response) {
    console.log("admin");
    response.render('admin/index', { username: request.session.username, email: request.session.email });
});
// router.get('/details/:email', function(request, response) {
//     console.log("details");
//     userModel.getByEmail(request.params.email, function(result) {
//         response.render("admin/details", result);
//     })
// });
router.get('/details/:email', function(request, response) {

    userModel.getByEmail(request.params.email, function(result) {
        console.log("Deki ai porjonto ay ki na!!!!!!!!!!");
        console.log(result);
        response.render('admin/details', result);
    });

});

router.get('/edit/:email', function(request, response) {
    console.log("edit get");

    userModel.getByEmail(request.params.email, function(result) {
        response.render('admin/edit', result);
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
        salary: request.body.salary,

    };

    userModel.update(user, function(status) {

        if (status) {
            response.redirect('../details/' + request.params.email);
        } else {
            response.redirect('/admin/edit/' + request.params.email);
        }
    });

});


router.get('/userList', function(request, response) {
    console.log("userlist get");

    userModel.getAll(function(result) {
        console.log("userlist get all");
        response.render('admin/userlist', { user: result });
    });
});
router.get('/reports', function(request, response) {
    console.log("reports get");

    userReports.getAll(function(result) {
        console.log(" get all");
        response.render('admin/reports', { user: result });
    });
});




router.get('/delete/:email', function(request, response) {
    console.log("delete ");
    userModel.getByEmail(request.params.email, function(result) {
        console.log("delete get");
        response.render("admin/delete", result);
    })
});

router.post('/delete/:email', function(request, response) {

    userModel.delete(request.params.email, function(status) {
        if (status) {
            response.redirect("/admin/userList");
        } else {
            response.redirect("/admin/delete/" + request.params.email);
        }
    })
});

router.get('/history/:email', function(request, response) {

    customerhistoryModel.getByEmail(request.params.email, function(result) {
        console.log("Order mal");
        console.log(result);
        if (result == "") {
            console.log("Order mal naaaaiiiii");

            response.redirect('../details/' + request.params.email);
        } else {

            response.render('admin/history', result);
        }


    });

});



module.exports = router;