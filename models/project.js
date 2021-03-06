const mongoose = require("mongoose");

//Schema Setup
const projectSchema = new mongoose.Schema({
    name: String,
    timeline: String, 
    image: [String],
    description: String
});

module.exports = mongoose.model("Project", projectSchema);