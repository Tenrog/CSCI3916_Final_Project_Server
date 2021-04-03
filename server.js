/*
CSC3916 HW2
File: Server.js
Description: Web API scaffolding for Movie API
 */

var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var authController = require('./auth');
var authJwtController = require('./auth_jwt');
var jwt = require('jsonwebtoken');
var cors = require('cors');
var rp = require('request');
var User = require('./Users');
var Review = require('./Reviews')
var Movie = require('./Movies');
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());

var router = express.Router();



router.post('/token', function (req, res) {
    var request = require("request");
clientID = 'YOUR_CLIENT_ID'
clientSecret = 'YOUR_CLIENT_SECRET'

var options = {
   method: 'POST',
   url: 'https://oauth.fatsecret.com/connect/token',
   method : 'POST',
   auth : {
      user : "156dee60d30e47658801e359190329a7",
      password : "e74728e4b4b44d6db0a7ada9a8da5457"
   },
   headers: { 'content-type': 'application/json'},
   form: {
      'grant_type': 'client_credentials',
      'scope' : 'basic'
   },
   json: true
};

request(options, function (error, response, body) {
   if (error) throw new Error(error);

   console.log(body);
});
    
 router.post('/search', function (req, res) {
     var searchBody = {
         
     

app.use('/', router);
app.listen(process.env.PORT || 8080);
module.exports = app; // for testing only


