require("dotenv").config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var connection=require('./config/connection');

var app = express();
var userAPIRouter=require('./api/routes/userAPIRouter');
//importing database connection
(async ()=>await connection())();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user",userAPIRouter);




module.exports = app;
