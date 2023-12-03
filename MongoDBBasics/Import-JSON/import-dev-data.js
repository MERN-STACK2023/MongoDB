const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');

//CONNECT TO dATABASE
mongoose.connect(process.env.REMOTE_CONNECTION_STRING)//1. connect to Database
    .then((connection) => {
        console.log('DB Connection Successful')
    }).catch((err) => {
        console.log('Some Error has occured')//will configure error later
    })