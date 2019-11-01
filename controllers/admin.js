var express = require('express');
var userModel = require('./../models/user-model');
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

module.exports = router;