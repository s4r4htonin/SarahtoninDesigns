//~~~~~~~~~~~~~~~~~~//
//    Definitions   //
//~~~~~~~~~~~~~~~~~~//

const express    = require("express"),
      router     = express.Router(),
      dotenv     = require("dotenv").config(),
      nodemailer = require("nodemailer");

//Models
const Project = require("../models/project");

//~~~~~~~~~~~~~~~~~~//
//      Routes      //
//~~~~~~~~~~~~~~~~~~//

//Root Route
router.get("/", function(req, res){
    res.redirect("/projects");
});

//About Me
router.get("/about", function(req, res){
  res.render("about");
});

//Contact Me
router.get("/contact", function(req, res){
    res.render("contact");
});

//Send contact email
router.post("/contact", function(req, res){

    let smtpTransport = nodemailer.createTransport({ //stores email service being used as variable
        service: 'Gmail',
        auth: {
            user: 'ravereviews44@gmail.com',
            pass: process.env.GMAILPW
        }
    });
    
    let mailOptions = {
      from: 'ravereviews44@gmail.com',
      to: "sarahtonindesigns@gmail.com",
      subject: "Contact Form Response",
      text: `From: ${req.body.contact.name} \n
             Email: ${req.body.contact.email} \n\n
             Message: \n
             ${req.body.contact.message}`
    };
    
    smtpTransport.sendMail(mailOptions, function(err, sentMail){
      if (err) {
        console.log(err);
        res.redirect("/contact");
      } else {
        res.redirect("/",);
      }
    });
});

module.exports = router;

