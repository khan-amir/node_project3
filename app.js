const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const cors = require('cors');
require('dotenv/config');


app.use(cors());
app.use(bodyParser.json());


const postsRoute = require('./routes/posts');

app.use('/post', postsRoute);
 
app.get('/', (req, res) => {
    res.send('We are on home');
});

const dbConncetion = process.env.DB_CONNECTION || 'mongodb://localhost:27017/db';

mongoose.connect(
    dbConncetion, () => 
console.log('connected to DB!')
);

app.listen(3000);