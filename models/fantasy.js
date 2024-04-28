const mongoose = require("mongoose");

// Define schema with validation
const fantasySchema = new mongoose.Schema({
    book_publisher: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    artist: { type: String, required: true },
    genre: { type: [String], required: true },
    heros: { type: [String], required: true },
    villains: { type: [String], required: true },
});

const Fantasy =  mongoose.model("Fantasy", fantasySchema);

module.exports = Fantasy;