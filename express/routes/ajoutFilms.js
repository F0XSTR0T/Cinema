const express = require('express');
const Router = express.Router();
const mySqlConnection = require('../connection')

Router.post('/', (req, res) => {
    mySqlConnection.query(`INSERT INTO movie (id_distributor, title, director, duration, realease_date, rating) VALUES (${id_distributor}, ${title}, ${director}, ${duration}, ${realease_date}, ${rating}));`, (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        }else {
            console.log(err);
        }
    })
})

module.exports = Router;