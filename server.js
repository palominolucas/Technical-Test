'use strict'


const express = require('express');
const bodyParser = require('body-parser');
const properties = require('./config/properties');
const MoviesRoutes = require('./movies/movies.routes');
const db = require('./config/database');
const moviesRoutes = require('./movies/movies.routes');
const clasificationRoutes = require('./clasification/clasification.routes');


//init db
db();
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncode = bodyParser.urlencoded({ extended: true});
const app = express();
app.use(bodyParserJSON);
app.use(bodyParserURLEncode);


//init routes
const router = express.Router();

//use express router
app.use('/api', router);
moviesRoutes(router);
clasificationRoutes(router);

app.listen(properties.PORT, () => console.log(`El servidor esta corriendo en el puerto ${properties.PORT}`)); 