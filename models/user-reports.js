var db = require('./db')

module.exports = {


    getAll: function(callback) {
        var sql = "select * from reports";

        db.getResults(sql, [], function(results) {

            if (results.length > 0) {
                console.log('reports pise');
                callback(results);
            } else {
                console.log('report pise nai');
                callback([]);
            }
        });
    },
    insert: function(user, callback) {

        var sql = "insert into reports values(?, ? ,? )";
        db.execute(sql, [user.email, user.reports, user.type], function(status) {
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