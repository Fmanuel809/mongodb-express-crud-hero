var express = require('express');
var log = require('morgan')('dev');
var bodyParser = require('body-parser');

var properties = require('./config/properties');
var db = require('./config/database');

// Heros Routes
var heroRoutes = require('./heros/heros.routes');

var app = express();

// Body Parser
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended: true});

// Initialise Express Router
var router = express.Router();

// Call the fatabase connectivity function
db();

// Configure app.use()
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// Error Handling
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
    next();
});

// Use Express Router
app.use('/heroApp', router)

// Call Heros Routing
heroRoutes(router);

app.listen(properties.PORT, (req, res) => {
    console.log(`Server is running on ${properties.PORT} port.`)
});
