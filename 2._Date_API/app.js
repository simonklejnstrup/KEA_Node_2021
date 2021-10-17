const app = require("express")()

app.get("/getDay", (req, res) => {
    // const date = new Date()
    // res.send({day: new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date)})

    //Array'et kan med fordel sættes udenfor funktionen
    const days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    res.send({ day: days[Date.getDay()] })
}


) 

app.listen(3000)