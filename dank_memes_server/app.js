
const app = require("express")()
const memes = require("./memes.json")



app.get("/dankmemes", (req, res) => {
    res.send(memes)
})

app.get("/dankmeme/:index", (req, res) => {
    
    res.send({ 
        "id": req.params.index, 
        "meme": memes[req.params.index] 
    })
})



app.listen(8080);