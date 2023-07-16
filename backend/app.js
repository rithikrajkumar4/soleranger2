const express = require("express");
const app = express();
const cookieParser = require('cookie-parser') 
const errorMiddleWare = require("./middleware/error");
const bodyParser = require('body-parser') ;
const cors = require('cors') ;

app.use(cors({ credentials : true,origin:"https://soleranger2.vercel.app" })) ;
app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : true})) ;


// Route Imports

const product = require('./routes/productRoute');
const user = require('./routes/userRoute');
const order = require('./routes/orderRoute');

app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);

// middleware for Errors
app.use(errorMiddleWare);

module.exports = app;