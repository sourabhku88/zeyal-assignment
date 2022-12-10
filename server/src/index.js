const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rout = require('./router/rout')
const app = express();
const PORT = process.env.PORT || 3002;


const DB_URL = 'mongodb+srv://sourabh:sourabh@cluster0.vvdx1ge.mongodb.net/zygalassignment' 

app.use(express.json());
app.use(cors());

mongoose.connect(DB_URL).then(_ => console.log('DB connect')).catch(err => console.log(err));

app.use('/' , rout);


app.listen(PORT , _ => console.log('server running on ' + PORT));