const mongoose = require ("mongoose");

const scifiSchema = new mongoose.Schema({
    book_publisher: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    artist: { type: String, required: true },
    genre: { type: [String], required: true },
    heros: { type: [String], required: true },
    villains: { type: [String], required: true },
});

const Scifi = mongoose.model("Scifi", scifiSchema);

module.exports = Scifi;