import express from "express";
import bcrypt from "bcrypt";
import { connectSqlite } from "../database/connectSqlite.js";
import rateLimit from "express-rate-limit"

const router = express.Router();

const authRateLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 6
})
router.use("/auth", authRateLimiter)



router.post("/admin/login", async (req, res) => {
    const db = await connectSqlite()
    
    const hashInfo = await db.all(`
        SELECT hash FROM secrets WHERE id = 1
        `,
    )

    const hash = hashInfo.map(hash => hash.hash)

    bcrypt.compare(req.body.pass, hash[0], function(err, result) {
        if (result) {
            req.session.loggedIn = true;

            res.sendStatus(200);
        } else {
            res.sendStatus(400)
        }
    });        
})

router.get("/admin/logout", (req, res) => {
    req.session.loggedIn = false;
    res.redirect("/")
})

router.get("/logout", (req, res) => {
    req.session.destroy()

    res.redirect("/")
})

// router.get("/saveAdminHash", async (req, res) => {
    
//     bcrypt.hash(req.body.pass, saltRounds, async function(err, hash) {
            
//         const db = await connectSqlite()
    
//         const SQL = await db.run(`
//             INSERT INTO secrets 
//             ('hash')
//             VALUES
//             (?);
//             `,
//             hash
//         )
//         .then(() => res.sendStatus(200))
//         .catch(() => res.sendStatus(500))
//     });
// });



export default router