require("dotenv").config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var connection=require('./config/connection');

var app = express();
var userAPIRouter=require('./api/routes/userAPIRouter');
var contestAPIRouter=require('./api/routes/contestAPIRouter');
var dietAPIRouter=require('./api/routes/dietAPIRouter');
var leaderboardAPIRouter=require('./api/routes/leaderboardAPIRouter');




//importing database connection
(async ()=>await connection())();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const corsOptions ={
    origin:'*',            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}
app.use(cors(corsOptions))
app.use(cookieParser());

app.use("/api/user",userAPIRouter);
app.use("/api/contest",contestAPIRouter);
app.use("/api/diet",dietAPIRouter);
app.use("/api/leaderboard",leaderboardAPIRouter);




module.exports = app;
