/**
 * Created by ralemy on 9/16/16.
 */
import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", {title: "Entry page"});
});

router.get("/hello/:name?", function (req, res) {
    res.render("index", {title: `Hello ${req.params.name || "World"}`});
});

export default router;
