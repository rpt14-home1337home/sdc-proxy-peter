"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var cors = require('cors');

var dbConnection = require('./../db/db.js');

var app = express(); // const port = process.env.PORT || 3001;

var port = 3001;
app.use(cors());
app.use(express["static"](__dirname + './../dist'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.get('/retrieve', function (req, res) {
  dbConnection.retrieve(function (data) {
    res.send(data);
  });
});
app.listen(port, function () {
  console.log("Listening on port: ".concat(port));
});
