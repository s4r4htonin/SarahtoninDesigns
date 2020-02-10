const mongoose = require("mongoose");

//Schema Setup
const projectSchema = new mongoose.Schema({
    name: String,
    timeline: String, 
    images: { //should this whole thing be an object or an array?
        indexImage: String,
        otherImages: [String] //unsure if this is the correct way to label it?
    },
    description: String
    // links: [String] 
});

module.exports = mongoose.model("Project", projectSchema);