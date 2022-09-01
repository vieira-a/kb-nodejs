const express = require('express');

const app = express();

app.listen('7777');

app.get('/courses', function (req, res) {
    res.json(["Course 1", "Course 2", "Course 3"])
})

app.post('/courses', function(req, res) {
    res.json(["Course 1", "Course 2", "Course 3", "Course 4"])
})

app.put('/courses/:id', function(req, res) {
    res.json(["Course 5", "Course 2", "Course 3", "Course 4"])
})

app.patch('/courses/:id', function(req, res) {
    res.json(["Course 5", "Course 6", "Course 3", "Course 4"])
})

app.delete('/courses/:id', function(req, res) {
    res.json(["Course 6", "Course 3", "Course 4"])
})