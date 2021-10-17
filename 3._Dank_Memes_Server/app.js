
// const app = require("express")()
const express = require("express");
const app = express();
// const memes = require("./memes.json")
const fs = require('fs');
app.use(express.json())
let AUTO_INCREMENT = 3

const memes = [
    {id : 1, topText : "Trollface", bottomText: "hehehehehe"},
    {id : 2, topText : "Keep calm", bottomText: "And carry on"},
    {id : 3, topText : "Deez nuts", bottomText: "...are made for walking"}
]


app.get("/dankmemes", (req, res) => {
    res.send(memes)
})

app.get("/dankmeme/:id", (req, res) => {
    const dankMeme = dan
    res.send({ 
        "id": req.params.id, 
        "meme": memes[req.params.id] 
    })
})

app.post("/createdankmeme", (req, res) => {
    id++ 
    console.log(id)
    console.log(req.body.content)
    fs.writeFile(   'memes.json', 
                    req.body.content, 
                    {'flag':'a'}, 
                    function(err){
        if (err) {
            console.error(err)
            return console.error(err);
        }
    })
    
    res.send(memes)
})






//////////
//ANDERS' løsning
//////////



app.listen(8080, (error) => {
    if (error) {
        console.log(error)
    }
    console.log("The server is running on port ", 8080)
})