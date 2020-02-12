//~~~~~~~~~~~~~~~~~~//
//    Definitions   //
//~~~~~~~~~~~~~~~~~~//

const   express        = require("express"),
        app            = express(),
        bodyParser     = require("body-parser"),
        mongoose       = require("mongoose"),
        methodOverride = require("method-override");

//Models
const Project = require("./models/project");

//Routes
const indexRoutes   = require("./routes/index"),
      projectRoutes = require("./routes/projects");

//~~~~~~~~~~~~~~~~~~//
//    App Config    //
//~~~~~~~~~~~~~~~~~~//

//Database Config
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
let url = process.env.DATABASEURL || "mongodb://localhost/sarahtonin_designs"; //connect to defined route or backup local route
mongoose.connect(url); //connect to MongoDB

app.use(bodyParser.urlencoded({ extended: true })); //allows express to pull data from forms using req.body._________
app.set("view engine", "ejs"); //Tells express that /views are ejs files
app.use(express.static("public")); //Link CSS stylesheets to app, __dirname adds directory that folder lives in
app.use(methodOverride("_method")); //allow PUT/DELETE requests from form

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