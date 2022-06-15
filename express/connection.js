const mysql = require('mysql');

var mySqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    port : 8889,
    database : 'cinema',
    multipleStatement : true
});

mySqlConnection.connect((err) => {
    if(!err) {
        console.log('Connection established');
    } else {
        console.log('Connection failed');
    }
});

module.exports = mySqlConnection; 