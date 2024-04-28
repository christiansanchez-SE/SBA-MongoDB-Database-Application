const Comic = require("../models/comic");

const fetchAllComics = async (req, res) => {
    // 1. Get all comics from mongoDB
    // 2. Send the comics back as a response

  // --------------------------------(1)
    const comics = await Comic.find();
  // --------------------------------(2)
    res.json({ comics: comics });

};

const fetchComic = async (req, res) => {
  // 1. Get id off the url
  // 2. Find the note assoc. w/ ID
  // 3.Send response with that note as the payload

  // --------------------------------(1)
  const comicId = req.params.id;
  // --------------------------------(2)
  const comic = await Comic.findById(comicId);
  // --------------------------------(3)
  res.json({ comic: comic});

}

const createComic = async (req, res) => {
  // 1. Get data from req.body
  // 2. Create comic
  // 3. Respond with new copy of Comic

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
  const comic = await Comic.create({
    book_publisher: book_publisher,
    title: title,
    author: author,
    artist: artist,
    genre: genre,
    heros: heros,
    villains: villains,
  });
  // --------------------------------(3)
  res.json({ comic: comic });

}

const updateComic = async (req, res) => {
  // 1. Get id off the url
  // 2. Get the data off the id
  // 3. Find and Update Comic
  // 4. Retrieve updatedComic and send it as a response 

  // --------------------------------(1)
 const comicId = req.params.id;
  // --------------------------------(2)
  const book_publisher = req.body.book_publisher;
  const title = req.body.title;
  const author = req.body.author;
  const artist = req.body.artist;
  const genre = req.body.genre;
  const heros = req.body.heros;
  const villains = req.body.villains;
  // --------------------------------(3)
 const comic = await Comic.findByIdAndUpdate(comicId, {
    book_publisher: book_publisher,
    title: title,
    author: author,
    artist: artist,
    genre: genre,
    heros: heros,
    villains: villains,
 });
  // --------------------------------(4)
  const updatedComic = await Comic.findById(comicId);
  res.json({ comic: updatedComic });
  
};

const deleteComic = async (req, res) => {
  // 1. Get the id off the url
  // 2. Delete the record
  // 3. Send Response

// --------------------------------(1)
const comicId = req.params.id;
// --------------------------------(2)
await Comic.findByIdAndDelete(comicId);
// --------------------------------(3)
res.json({ success: "Record  has been deleted successfully"});
};

module.exports = {
    fetchAllComics,
    fetchComic,
    createComic,
    updateComic,
    deleteComic
};

// {
//     "book_publisher": "DC Comics",
//     "title": "SUPERBOY: THE MAN OF TOMORROW",
//     "author": "Kenny Porter",
//     "artist": "Jahnoy Lindsay",
//     "genre": ["Superhero", "Action", "Adventure"],
//     "heros": ["Superboy", "Supergirl", "Superman", "Batman", "The Flash"],
//     "villains": ["Chemo", "Lex Luthor", "Gorilla Grodd"]
// }
