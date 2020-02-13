// require mongoose module
var mongoose = require('mongoose');

// require chalk module to given colors to cosole text
var chalk = require('chalk');

// rquire database URL from properties file
var dbURL = require('./properties').DB;

var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;

// export function and imported by index.js
module.exports = function() {
    mongoose.connect(dbURL);

    mongoose.connection.on('connected', function() {
        console.log(connected(`Mongoose default connection is open to ${dbURL}.`));
    });

    mongoose.connection.on('error', function(ex) {
        console.log(error(`Mongoose default connection has occured ${ex} error.`));
    });

    mongoose.connection.on('disconnected', function(ex) {
        console.log(disconnected(`Mongoose default connection is disconnected.`));
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log(termination(`ongoose default connection is disconnected due to application termination.`));
            process.exit(0);
        });
    });
}