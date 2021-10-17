const express = require("express");
const app = express();

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/basicjs", (req, res) => {
    res.sendFile(__dirname + "/public/basicjs/basicjs.html")
})


app.get("/arrays", (req, res) => {
    res.sendFile(__dirname + "/public/basicjs/arrays.html")
})

app.get("/funktioner", (req, res) => {
    res.sendFile(__dirname + "/public/basicjs/funktioner.html")
})

app.get("/loops", (req, res) => {
    res.sendFile(__dirname + "/public/basicjs/loops.html")
})

app.get("/objekter", (req, res) => {
    res.sendFile(__dirname + "/public/basicjs/objekter.html")
})

app.get("/strings", (req, res) => {
    res.sendFile(__dirname + "/public/basicjs/strings.html")
})

app.get("/at_lave_en_server", (req, res) => {
    res.sendFile(__dirname + "/public/at_lave_en_server.html")
})



app.listen(8080, (error) => {
    if (error) {
        console.log(error)
    
    }
    console.log("The server is running on port ", 8080)
})












