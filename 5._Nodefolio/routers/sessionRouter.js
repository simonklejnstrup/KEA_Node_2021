import express from "express"
const router = express.Router()
import session from "express-session";









/* Serve endpoints */
/* Serve endpoints */
/* Serve endpoints */

router.get("/auth/login", (req, res) => {
    res.send("<h2>You are now logged in</h2>")
});

router.get("/visit", (req, res) => {
    req.session.isVisiting = true
    res.send({ msg: "Welcome"})
});

router.get("/isVisiting", (req, res) => {

    res.send({ clientIsVisiting: req.session.isVisiting || false})
});

router.get("/leave", (req, res) => {
    //req.session.isVisiting = false
    // eller
    req.session.destroy()
    res.send({})
});

export default router