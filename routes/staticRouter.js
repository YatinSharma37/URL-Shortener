    const express = require("express");
    const URL = require("../models/url");

    const router = express.Router();

    router.get('/',async(req,res)=>{
        const allUrls = await URL.find({}); // Ensure URL.find() is a valid method
        return res.render("home", {
            urls: allUrls
        })
    })
    module.exports = router;