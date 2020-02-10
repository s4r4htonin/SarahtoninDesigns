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
//Create - post request to "/"
//Show - get request to "/:id"
//Edit - get request to "/:id/edit"
//Update - put request to "/:id"
//Destroy - delete request to "/:id"

module.exports = router;