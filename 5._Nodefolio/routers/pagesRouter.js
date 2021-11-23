import express from "express";
const router = express.Router();
import { createPage } from '../util/render.js'
import path from "path";

/* Ready the pages */
/* Ready the pages */
/* Ready the pages */

const frontpagePage = createPage("frontpage/frontpage.html", { 
    title: "Nodefolio | Welcome"
});
const cvPage = createPage("cv/cv.html", {
    title: "Nodefolio | CV", 
    cssTag: `<link rel="stylesheet" href="../pages/cv/cv.css">`
});
const projectsPage = createPage("projects/projects.html", {
    title: "Nodefolio | Projects",
    cssTag: `<link rel="stylesheet" href="../pages/projects/projects.css">`
});
const contactPage = createPage("contact/contact.html", {
    title: "Nodefolio | Contact",
    cssTag: `<link rel="stylesheet" href="../pages/contact/contact.css">`
});
const adminPage = createPage("admin/admin.html", {
title: "Nodefolio | Admin",
    cssTag: `<link rel="stylesheet" href="../pages/admin/admin.css">`
})

const dashboardPage = createPage("dashboard/dashboard.html", {
    title: "Nodefolio | Dashboard",
    cssTag: `<link rel="stylesheet" href="../pages/dashboard/dashboard.css">`
})

/* Serve endpoints */
/* Serve endpoints */
/* Serve endpoints */

router.get("/", (req, res) => {
    res.send(frontpagePage);
});

router.get("/cv", (req, res) => {
    res.send(cvPage);
});

router.get("/projects", (req, res) => {
    res.send(projectsPage);
});

router.get("/contact", (req, res) => {
    res.send(contactPage);
});

router.get("/admin", (req, res) => {
    if (req.session.loggedIn) {
        res.send(dashboardPage)
    } else {
        res.send(adminPage)
    }
});

router.get("/dashboard", (req, res) => {
    if (req.session.loggedIn) {
        res.send(dashboardPage)
    } else {
        res.redirect("/")
    }
});




export default router;

