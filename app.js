//~~~~~~~~~~~~~~~~~~//
//    Definitions   //
//~~~~~~~~~~~~~~~~~~//

const   express        = require('express'),
        app            = express(),
        bodyParser     = require("body-parser");

//~~~~~~~~~~~~~~~~~~//
//    App Config    //
//~~~~~~~~~~~~~~~~~~//

app.use(bodyParser.urlencoded({ extended: true })); //allows express to pull data from forms using req.body._________
app.set("view engine", "ejs"); //Tells express that /views are ejs files
app.use(express.static("public")); //Link CSS stylesheets to app, __dirname adds directory that folder lives in

//~~~~~~~~~~~~~~~~~~//
//      Routes      //
//~~~~~~~~~~~~~~~~~~//

//Root Route
app.get("/", function(req, res){
    res.render("index");
});

//Contact Me
app.get("/contact", function(req, res){
    res.render("contact");
});

//~~~~~~~~~~~~~~~~~~//
//   Start Server   //
//~~~~~~~~~~~~~~~~~~//

//Start server
app.listen(process.env.PORT || 3000, function () {
    console.log("Server started on port 3000");
});