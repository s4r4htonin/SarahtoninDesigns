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

//Index
router.get("/", function(req, res){
    Project.find({}, function(err, allProjects){ //find all projects in the database and pass them to "index" as variable projects
        if (err){
            console.log(err);
        } else {
            res.render("projects/index", { projects: allProjects });
        }
    });
});

//New - get request to "/new"
router.get("/new", function(req, res){
    res.render("projects/new");
});

//Create - post request to "/"
router.post("/", function(req, res){
    Project.create(req.body.project, function(err, newProject){
        if (err){
            console.log(err);
        } else {
            newProject.save(); //save new project to database
            res.redirect("/projects");
        }
    })
});

//Show - get request to "/:id"
    //find project by id
    //render show page passing project to template
router.get("/:id", function(req, res){
    Project.findById(req.params.id, function(err, foundProject){
        if (err){
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