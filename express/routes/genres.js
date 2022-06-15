const express = require('express');
const Router = express.Router();
const mySqlConnection = require('../connection')

Router.get('/genres', (req, res) => {
  mySqlConnection.query("SELECT names FROM genres", (err, rows, fields) => {
      if(!err) {
          res.send(rows);
      }else {
          console.log(err);
      }
  })
})

module.exports = Router;