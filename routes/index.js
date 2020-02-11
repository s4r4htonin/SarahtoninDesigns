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

//Contact Me
router.get("/contact", function(req, res){
    res.render("contact");
});

//Send contact email
router.post("/contact", function(req, res){

    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "proccess.env.EMAIL",
        pass: "process.env.GMAILPW"
      }
    });
    
    var mailOptions = {
      from: "proccess.env.EMAIL",
      to: "sarahtonindesigns@gmail.com",
      subject: "Contact Form Response",
      text: `From: ${req.body.contact.name} \n
             Email: ${req.body.contact.email} \n\n
             Message: \n
             ${req.body.contact.message}`
    };
    
    transporter.sendMail(mailOptions, function(err, sentMail){
      if (error) {
        console.log(err);
        res.redirect("/contact");
      } else {
        res.redirect("/");
      }
    });
});

module.exports = router;

