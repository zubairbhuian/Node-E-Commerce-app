const express = require("express");
const createError = require('http-errors')
const bodyParser = require('body-parser');
const xssClean = require('xss-clean');
const rateLimit = require('express-rate-limit')
const morgam = require("morgan");
const UserRouter = require("./routers/userRoute");
const seedRouter = require("./routers/seedRoute");

const app = express();

const rateLimiter =rateLimit({
    windowMs:1* 60 *100, // 1 minute
    max:5,
    message :'Too many reuests from this IP'
})

app.use(xssClean());
app.use(rateLimiter);
app.use(morgam('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/api/users',UserRouter);
app.use('/api/seed',seedRouter);


// client Error handeling
app.use((req,res,next)=>{
createError(404,'route not found')
next();
})
// server Error handeling
app.use((err,req,res,next)=>{
    console.error(err.message);
    res.status(505).send('Something Broken!')
    return res.status(err.status ||500).json({
        success : false,menubar:err.message})
    })

module.exports =app;