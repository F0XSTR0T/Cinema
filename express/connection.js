const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

var mySqlConnection = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    port : process.env.DB_PORT,
    database : process.env.DB_NAME,
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