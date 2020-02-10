//~~~~~~~~~~~~~~~~~~//
//    Definitions   //
//~~~~~~~~~~~~~~~~~~//

const   express        = require("express"),
        app            = express(),
        bodyParser     = require("body-parser");

//Models


//Routes
const indexRoutes   = require("./routes/index"),
      projectRoutes = require("./routes/projects");

//~~~~~~~~~~~~~~~~~~//
//    App Config    //
//~~~~~~~~~~~~~~~~~~//

app.use(bodyParser.urlencoded({ extended: true })); //allows express to pull data from forms using req.body._________
app.set("view engine", "ejs"); //Tells express that /views are ejs files
app.use(express.static("public")); //Link CSS stylesheets to app, __dirname adds directory that folder lives in

//Database Config

//Routes
app.use("/", indexRoutes);
app.use("/projects", projectRoutes);

//~~~~~~~~~~~~~~~~~~//
//   Start Server   //
//~~~~~~~~~~~~~~~~~~//

//Start server
app.listen(process.env.PORT || 3000, function () {
    console.log("Server started on port 3000");
});