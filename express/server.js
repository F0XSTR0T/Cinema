const bodyParser = require ('body-parser');
const express = require ('express');
const mySqlConnection = require ('./connection');
const filmRoutes = require ('./routes/films');

var app = express();
app.use(bodyParser.json());

app.use('/films', filmRoutes)


app.listen(3000);