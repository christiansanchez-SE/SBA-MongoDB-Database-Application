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
  })
  // --------------------------------(3)
  res.json({ comic: comic })




}

module.exports = {
    fetchAllComics,
    fetchComic,
    createComic
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
