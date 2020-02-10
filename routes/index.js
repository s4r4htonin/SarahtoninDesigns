//~~~~~~~~~~~~~~~~~~//
//    Definitions   //
//~~~~~~~~~~~~~~~~~~//

const express = require("express"),
      router  = express.Router();

//Models
// Insert projects model here

//~~~~~~~~~~~~~~~~~~//
//      Routes      //
//~~~~~~~~~~~~~~~~~~//

//Root Route
router.get("/", function(req, res){
    res.render("index");
});

//Contact Me
router.get("/contact", function(req, res){
    res.render("contact");
});

//need to put in post request to "/contacts" for email functionality

module.exports = router;

