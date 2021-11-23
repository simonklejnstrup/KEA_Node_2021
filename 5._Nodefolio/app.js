import express from "express";
const app = express();
import session from "express-session";
// import rateLimit from "express-rate-limit"
// const rateLimiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 100
// })

// app.use(rateLimiter)
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: "shhhhhhhhh",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


/* Import and use routers */
/* Import and use routers */
/* Import and use routers */

import projectsRouter from "./routers/projectsRouter.js";
import pagesRouter from "./routers/pagesRouter.js";
import contactRouter from "./routers/contactRouter.js";
import adminRouter from "./routers/adminRouter.js";
import sessionRouter from "./routers/sessionRouter.js";

app.use(projectsRouter);
app.use(pagesRouter);
app.use(contactRouter);
app.use(adminRouter);
app.use(sessionRouter);




    


//AUTHENTICATE TUTORIAL

const users = []

app.get("/users", (req, res) => {
    res.json(users)
});

app.post("/users", async(req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 12)
        const user = { name: req.body.name, password: hashedPassword }
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
    
});

app.post("/users/login",  async (req, res) => {
    const user = users.find(user => user.name === req.body.name) // Ændres til database-kald
    if (user === null){
        return res.status(404).send("Cannot find user")
    }
    try {
        if ( await bcrypt.compare(req.body.password, user.password) ) { // Ændres til database-kald
            res.send("Succes")
        } else (
            res.send("Not allowed")
        )
    
    } catch {
        res.status(500).send()

    }
});


/* Configure server */
/* Configure server */
/* Configure server */

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    console.log("Server is running on", PORT);
});
