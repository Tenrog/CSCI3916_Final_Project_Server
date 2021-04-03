/*
CSC3916 HW2
File: Server.js
Description: Web API scaffolding for Movie API
 */

var express = require('express');
var fatsecret = require('fatsecret');
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

const fatAPI = new require('fatsecret')('156dee60d30e47658801e359190329a7', 'e74728e4b4b44d6db0a7ada9a8da5457');

router.post('/token', function (req, res) {
   fatAPI
       .method('foods.search', {
          search_expression: req.body.term,
          max_results: 10
       })
       .then(function (results) {
          console.log(results.foods.food);
       })
       .catch(err => console.error(err));
});

     

app.use('/', router);
app.listen(process.env.PORT || 8080);
module.exports = app; // for testing only


