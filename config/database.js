'use strict'

const mongoose = require('mongoose');
const chalk = require('chalk');
const dbURL = require('./properties').DB;



//Customización de consola.
const connected = chalk.bold.green;
const error = chalk.bold.red;
const termination = chalk.bold.gray;


module.exports = () => {
    mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(connected('Mongo DB está funcionando perfectamente en', dbURL)))
        .catch(err => console.log(error(`Hubo un problema con la conección: ${err}`)))

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Mongoose se acaba de desconectar');
            process.exit(0)
        });
    });
}