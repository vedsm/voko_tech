/**
 * Created by ved on 28/11/16.
 */
// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 9000;
var mongoose = require('mongoose');

var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.db); // connect to our database

//for CORS
app.all('*',function(req, res, next) {
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
    //next();
});

// require('./config/passport')(passport); // pass passport for configuration

// set up our express application
// to get information from html forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/app/views'));
//app.set('view engine', 'ejs'); // set up ejs for templates

//


// routes ======================================================================
require('./app/routes/login.js')(app); // load our routes and pass in our app

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);

app.get('/health', function(req, res) {
    console.log('Success');
    res.json({success: "true", message: "Yayy"});
});

app.get('/dummyPage', function(req,res) {
    res.sendFile('app/views/testHTML.html', {root: __dirname});
})
