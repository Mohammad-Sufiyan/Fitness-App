require("dotenv").config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var session=require("express-session");
var connection=require('./config/connection');


var app = express();
//views router
var indexRouter=require("./routes/index");
var userRouter=require("./routes/user");
var leaderboardRouter=require("./routes/leaderBoard");
var contestRouter=require("./routes/contest");
var exerciseRouter = require('./routes/exercise')
//api
var userAPIRouter=require('./api/routes/userAPIRouter');
var contestAPIRouter=require('./api/routes/contestAPIRouter');
var dietAPIRouter=require('./api/routes/dietAPIRouter');
var leaderboardAPIRouter=require('./api/routes/leaderboardAPIRouter');
//importing database connection
(async ()=>await connection())();
// view engine setup
app.set('views', 
[__dirname + '/views'
]);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(session({
  secret: 'L.@VYbbjgt3MX:,8',
  resave: true,
  saveUninitialized: true,
}));
app.use(function(req, res, next) {
  res.locals.session =req.session;
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const corsOptions ={
    origin:'*',            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}
app.use(cors(corsOptions))
app.use(cookieParser());
app.use("/",indexRouter);
app.use("/user",userRouter);
app.use("/leaderboard",leaderboardRouter)
app.use("/contest",contestRouter)
app.use(exerciseRouter)

app.use("/api/user",userAPIRouter);
app.use("/api/contest",contestAPIRouter);
app.use("/api/diet",dietAPIRouter);
app.use("/api/leaderboard",leaderboardAPIRouter);

module.exports = app;
