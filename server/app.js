const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();
app.use(cookieParser());
app.use(express.json());

const port = 3001;
const uri = process.env.DB;
require('./db/connection')
app.use(express.json());
app.use(require('./router/auth'));


// dotenv.config({path : './config.env' });
// const DB = process.env.DATABASE;


// const middleware = (req, res, next) => {
//   console.log(`hello middleware`)
//   next();
// }



app.get('/', (req, res) => {
    res.send(`Hello world from server`)
});

// app.get('/about', middleware, (req, res) => {
//   res.cookie("cookie", "thapa")
//   console.log(`hello about`)
//     res.send(`Hello world about from server`)
// });

app.get('/signin', (req, res) => {
    res.send(`Hello world login from server`)
});

app.get('/register', (req, res) => {
    res.send(`Hello world from server`)
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});