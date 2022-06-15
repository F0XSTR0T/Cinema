const bodyParser = require ('body-parser');
const express = require ('express');
const mySqlConnection = require ('./connection');
const filmRoutes = require ('./routes/films');
const genreRoutes = require('./routes/genres')

var app = express();
app.use(bodyParser.json());

app.use('/films', filmRoutes)
app.use('/genres', genreRoutes)


app.listen(3000);