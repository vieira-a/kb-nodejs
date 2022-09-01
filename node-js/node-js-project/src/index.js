const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.json({message: "Hello, world Ignite!"})
})
app.listen('7777');