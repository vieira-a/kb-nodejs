const express = require('express');

const app = express();

app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.render("index");
})

app.get("/sobre", function(res, req) {
    res.render("about");
})

app.listen(8080);
console.log("Running...")