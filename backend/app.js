const express= require("express");
const app =express();

const errorHandler = require("../backend/middleware/error");

app.use(express.json());

//Routes import

const product = require('./routes/productroute');

app.use("/api/v1",product);

//Middleware for errors 
app.use(errorHandler);


module.exports = app;
