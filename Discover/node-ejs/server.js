const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [
        {
            title: "D",
            message: "Dourado"
        },
        {
            title: "E",
            message: "Encantado"
        },
        {
            title: "M",
            message: "Maravilhoso"
        },
        {
            title: "A",
            message: "Amoroso"
        },
        {
            title: "I",
            message: "Intrigante"
        },
        {
            title: "S",
            message: "Super"
        }
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript"

    res.render("pages/index", {
        qualities: items,
        subtitle
    });
})

app.get("/sobre", function (req, res) {
    res.render("pages/about");
})

app.listen(8080);
console.log("Running...");