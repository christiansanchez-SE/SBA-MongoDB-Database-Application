const Scifi = require("../models/scifi");

const fetchAllScifis = async (req, res) => {
    // 1. Get all comics from mongoDB
    // 2. Send the comics back as a response

  // --------------------------------(1)
  const scifi = await Scifi.find();
  // --------------------------------(2)
  res.json({ scifi: scifi});
};

const fetchScifi = async (req, res) => {
  // 1. Get id off the url
  // 2. Find the note assoc. w/ ID
  // 3.Send response with that note as the payload

  // --------------------------------(1)
  const scifiId = req.params.id;
  // --------------------------------(2)
  const scifi = await Scifi.findById(scifiId);
  // --------------------------------(3)
  res.json({ scifi:scifi });

};

const createScifi = async (req, res) => {
  // 1. Get data from req.body
  // 2. Create scifi
  // 3. Respond with new copy of scifi

  // --------------------------------(1)
  console.log(`BODY: ${req.body}`);
  const book_publisher = req.body.book_publisher;
  const title = req.body.title;
  const author = req.body.author;
  const artist = req.body.artist;
  const genre = req.body.genre;
  const heros = req.body.heros;
  const villains = req.body.villains;
  // --------------------------------(2)
  const scifi = await Scifi.create({
    book_publisher: book_publisher,
    title: title,
    author: author,
    artist: artist,
    genre: genre,
    heros: heros,
    villains: villains,
  });
  // --------------------------------(3)
  res.json({ scifi: scifi})

}

const updateScifi = async (req, res) => {
  // 1. Get id off the url
  // 2. Get the data off the id
  // 3. Find and Update Comic
  // 4. Retrieve updatedComic and send it as a response 

  // --------------------------------(1)
  const scifiId = req.params.id;
  // --------------------------------(2)
  const book_publisher = req.body.book_publisher;
  const title = req.body.title;
  const author = req.body.author;
  const artist = req.body.artist;
  const genre = req.body.genre;
  const heros = req.body.heros;
  const villains = req.body.villains;
  // --------------------------------(3)
  const scifi = await Scifi.findByIdAndUpdate(scifiId, {
    book_publisher: book_publisher,
    title: title,
    author: author,
    artist: artist,
    genre: genre,
    heros: heros,
    villains: villains,
 });
  // --------------------------------(4)
 const updatedScifi = await Scifi.findByIdAndUpdate(scifiId);
 res.json({ scifi: updatedScifi });

}

const deleteScifi = async (req, res) => {
  // 1. Get the id off the url
  // 2. Delete the record
  // 3. Send Response

  // --------------------------------(1)
  const scifiId = req.params.id;
  // --------------------------------(2)
  await Scifi.findByIdAndDelete(scifiId);
  // --------------------------------(3)
  res.json({ success: "Record  has been deleted successfully" })
}

module.exports = {
    fetchAllScifis,
    fetchScifi,
    createScifi,
    updateScifi,
    deleteScifi
};