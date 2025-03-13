const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = 3000;
const userRouter = require('./routes/user.routes');

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(userRouter);
// app.use(express.urlencoded());

app.listen(port, () => {
    console.log("server running in port ", port);
});

mongoose.connect('mongodb://localhost:27017/api-user')
    .then(() => {
        console.log('db is connected');
    })
    .catch((err) =>{
        console.log('error connecting db');
        
    });