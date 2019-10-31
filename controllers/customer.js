var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response) {
    console.log("customer");
    response.render('customer/index');
});



module.exports = router;