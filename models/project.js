const mongoose = require("mongoose");

//Schema Setup
const projectSchema = new mongoose.Schema({
    name: String,
    timeline: String, 
    images: [String],
    description: String
    // links: [String] 
});

module.exports = mongoose.model("Project", projectSchema);