//~~~~~~~~~~~~~~~~~~//
//    Definitions   //
//~~~~~~~~~~~~~~~~~~//

const express  = require("express"),
      router   = express.Router();

//Models
const Project = require("../models/project");

//~~~~~~~~~~~~~~~~~~//
//      Routes      //
//~~~~~~~~~~~~~~~~~~//

//Root Route
router.get("/", function(req, res){
    res.redirect("/projects");
});

//Contact Me
router.get("/contact", function(req, res){
    res.render("contact");
});

//need to put in post request to "/contacts" for email functionality

module.exports = router;

