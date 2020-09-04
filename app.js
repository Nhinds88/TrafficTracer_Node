const express = require("express");
const session = require("express-session");
const request = require("request");
const mysql = require("mysql");
var bodyParser = require('body-parser');
const tools = require("./tools.js")

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

// connection
var connection = tools.createConnection();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//routes

//root route
app.get("/", async function(req, res) {
    res.render("index");
}); //root route

//How it works
app.get("/howitworks", async function(req, res) {
    res.render("howitworks");
}); //How it works

//features
app.get("/features", async function(req, res) {
    res.render("features");
}); //features

//Demo
app.get("/demo", async function(req, res) {
    res.render("demo");
}); //Demo

//Login
app.get("/login", async function(req, res) {
    res.render("login");
}); //Login

//Dashboard
app.get("/dashboard", async function(req, res) {
    res.render("dashboard");
}); //Dashboard

//Login Auth
app.post("/auth", async function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    if (username && password) {
        
        connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {

            console.log("Query result: ", results);
            console.log("Error: ", error);

            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.username = username;
                res.redirect('/dashboard');
            } else {
                res.send('Incorrect enter Username and/or Password!');
            }
            res.end();
        });
    } else {
        res.send('Please enter Username and Password!');
        res.end();
    }
});//Login Auth

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
/////////////////////////////////////////////
///////////////////////////////////
/////////////////////////
///////////////
/////
/// 

//Contact us
app.get("/contactus", async function(req, res) {
    res.render("contactus");
}); //Contact us

//About us
app.get("/aboutus", async function(req, res) {
    res.render("aboutus");
}); //About us

//Support
app.get("/support", async function(req, res) {
    res.render("support");
}); //Support

//Privacy
app.get("/privacy", async function(req, res) {
    res.render("privacy");
}); //Privacy

//Legal
app.get("/legal", async function(req, res) {
    res.render("legal");
}); //Legal

//Terms
app.get("/terms", async function(req, res) {
    res.render("terms");
}); //Terms

//server listener
var listener = app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Express server is Running...");
    console.log('Listening on port ' + listener.address().port);
});

// connection
var connection = tools.createConnection();