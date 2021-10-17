// Node-specifik syntax i næste linje
 const express = require("express");
 const app = express();
//const app = require("express")()

const cake = require("./cake.json")
console.log(cake)

app.use(express.json())


app.get("/", (req, res) => {
    res.send({ mindIsBlown: true })
})

// task: Create a new route on the endpoint "/adventureTime"
// Send back data (data type must be json)

app.get("/adventureTime", (req, res) => {
    res.send({ 
        "name": "Simon",
        "age" : 33
 })

})

app.get ("/sendData", (req, res) => {
    console.log(req.query);

    res.send({name: req.query.name})
})

app.get ("/favoriteNumber/:favoriteNumber", (req, res) => {
    const high = req.params.favoriteNumber === "420" ? "Nice" : "Kikset"
    res.send({
        number: req.params.favoriteNumber,
        nice: high
    })
})

// Task: Create a route on /frontpage that sends back a welcome message

app.get ("/frontpage", (req, res) => {
    res.send("Smelcome!")
})

app.post("/messages", (req, res) => {
    console.log(req.body)
    res.send(req.body)
})



app.listen(8080)