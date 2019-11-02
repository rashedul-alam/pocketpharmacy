var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response) {
    console.log("manager");
    response.render('manager/index');
});

router.get('/salary', function(request, response) {
    console.log("manager");
    response.render('manager/salary');
});



module.exports = router;