const express = require("express");
const app = express();
const request = require("request");
const mysql = require("mysql");
const tools = require("./tools.js")

app.set('view engine', 'ejs');
app.use(express.static("public"));

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