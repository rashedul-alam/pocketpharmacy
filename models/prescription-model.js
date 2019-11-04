var db = require('./db')

module.exports = {

 insert: function(user, callback) {

        var sql = "insert into customerhistory values(?, ? ,? ,? ,? ,? ,? ,'')";
        db.execute(sql, [user.username, user.password, user.email, user.phone, user.address, user.type , user.prescription], function(status) {
            callback(status);
        });
    },
    update: function(user, callback) {

        var sql = "update customerhistory set prescription=? where email=?";
        console.log(user);
        console.log("fatt");
        db.execute(sql, [ user.prescription, user.email], function(status) {
            callback(status);
        });
    },

    delete: function(email, callback) {
        var sql = "delete from user where email=?";
        db.execute(sql, [email], function(status) {
            callback(status);
        });
    }
}