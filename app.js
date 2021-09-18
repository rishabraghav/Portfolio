const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization');
    next();
});

app.get('/api', (req, res) => {
    res.send('API status: Running');
})

app.listen(3030, '0.0.0.0', (req, res) => {
    console.log('node server started!');
})