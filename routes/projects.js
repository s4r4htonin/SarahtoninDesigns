//~~~~~~~~~~~~~~~~~~//
//    Definitions   //
//~~~~~~~~~~~~~~~~~~//

const express    = require("express"),
      router     = express.Router(),
      dotenv     = require("dotenv").config(),
      multer     = require("multer"),
      cloudinary = require("cloudinary");

//Models
const Project = require("../models/project");

//~~~~~~~~~~~~~~~~~~~~~~~~//
//   Image Upload Config  //
//~~~~~~~~~~~~~~~~~~~~~~~~//

//Multer Config
const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname);
    }
});
const imageFilter = function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) { //accept image files only
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
const upload = multer({ storage: storage, fileFilter: imageFilter })

//Cloudinary config
cloudinary.config({ 
    cloud_name: "sarahtonin-designs", 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
  });

//~~~~~~~~~~~~~~~~~~//
//      Routes      //
//~~~~~~~~~~~~~~~~~~//

//Index
router.get("/", function (req, res) {
    Project.find({}, function (err, allProjects) { //find all projects in the database and pass them to "index" as variable projects
        if (err) {
            console.log(err);
        } else {
            res.render("projects/index", { projects: allProjects });
        }
    });
});

//New - get request to "/new"
router.get("/new", function (req, res) {
    res.render("projects/new");
});

//Create - post request to "/"
router.post("/", upload.single("image"), function (req, res) { //uploads image when posting
    //Upload image to cloudinary
    cloudinary.v2.uploader.upload(req.file.path, function(err, result) {
        if (err){
            console.log(err);
            req.redirect("back");
        }
        req.body.project.image = result.secure_url; // add cloudinary url for the image to the project object under image property
        
        //Create new project in database
        Project.create(req.body.project, function (err, newProject) {
            if (err) {
                console.log(err);
            } else {
                newProject.save(); //save new project to database
                res.redirect("/projects");
            }
        });
    });
});

//Show - get request to "/:id"
router.get("/:id", function (req, res) {
    Project.findById(req.params.id, function (err, foundProject) {
        if (err) {
            console.log(err);
        } else {
            res.render("projects/show", { project: foundProject });
        }
    });
});


//Edit - get request to "/:id/edit"
//Update - put request to "/:id"
//Destroy - delete request to "/:id"

module.exports = router;