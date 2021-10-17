const express = require("express");
const app = express();

app.use(express.static("public"))

app.get("/creditor", (req, res) => {
    res.send({ message: "You are in debt"})
})

app.get("/sausage/:penge", (req, res) => {
    req.params.penge < 25 ? 
    res.redirect("/creditor") 
    : res.send({ sausage : "Død Indianer i egen kano med blod og bræk"})
    // res.redirect("/creditor")
    // res.send({ sausage : "Død Indianer i egen kano med blod og bræk"})
})

app.get("/sausage/", (req, res) => {
    // localhost:8080/sausage?money=22
    if (Number(req.query.money) < 25 ){
        res.redirect("/creditor")
    }  else {
        res.send({ sausage : "Død Indianer i egen kano med blod og bræk"})
    }
     
    
    // res.redirect("/creditor")
    // res.send({ sausage : "Død Indianer i egen kano med blod og bræk"})
})



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/index.html")
})

app.get("/cleo", (req, res) => {
    
    res.sendFile(__dirname + "/public/cleo/cleo.html")
})

app.get("/teenageroom", (req, res) => {
    res.sendFile(__dirname + "/public/teenageroom.html")
})




app.listen(8080, (error) => {
    if (error) {
        console.log(error)
    }
    console.log("The server is running on port ", 8080)
})