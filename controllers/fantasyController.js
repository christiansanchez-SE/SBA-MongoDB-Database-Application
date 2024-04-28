const Fantasy = require("../models/fantasy");

const fetchAllFantasies = async (req, res) =>{
    // 1. Get all comics from mongoDB
    // 2. Send the comics back as a response

  // --------------------------------(1)
  const fantsies = await Fantasy.find();
  // --------------------------------(2)
  res.json({ fantsies: fantsies });
}

const fetchFantasy = async (req, res) => {
  // 1. Get id off the url
  // 2. Find the note assoc. w/ ID
  // 3.Send response with that note as the payload

  // --------------------------------(1)
  const fantasyId = req.params.id;
  // --------------------------------(2)
  const fantasy = await Fantasy.findById(fantasyId);
  // --------------------------------(3)
res.json({ fantasy: fantasy});

};

const createFantasy = async (req, res) => {
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
  const fantasy = await Fantasy.create({
    book_publisher: book_publisher,
    title: title,
    author: author,
    artist: artist,
    genre: genre,
    heros: heros,
    villains: villains,
  });
  // --------------------------------(3)
  res.json({ fantasy: fantasy });
}

const updateFantasy = async (req, res) => {
  // 1. Get id off the url
  // 2. Get the data off the id
  // 3. Find and Update Comic
  // 4. Retrieve updatedComic and send it as a response 
  // --------------------------------(1)
  const fantasyId = req.params.id;
  // --------------------------------(2)
  console.log(`BODY: ${req.body}`);
  const book_publisher = req.body.book_publisher;
  const title = req.body.title;
  const author = req.body.author;
  const artist = req.body.artist;
  const genre = req.body.genre;
  const heros = req.body.heros;
  const villains = req.body.villains;
  // --------------------------------(3)
  const fantasy = await Fantasy.create({
    book_publisher: book_publisher,
    title: title,
    author: author,
    artist: artist,
    genre: genre,
    heros: heros,
    villains: villains,
  });
  // --------------------------------(4)
  const updatedFantasy = await Fantasy.findById(fantasyId);
  res.json({ fantasy: updatedFantasy});

}

const deleteFantasy = async (req, res) => {
  // 1. Get the id off the url
  // 2. Delete the record
  // 3. Send Response

  // --------------------------------(1)
  const fantasyId = req.params.id;
  // --------------------------------(2)
  await Fantasy.findByIdAndDelete(fantasyId);
  // --------------------------------(3)
  res.json({ success: "Record  has been deleted successfully"});
};

module.exports = {
    fetchAllFantasies,
    fetchFantasy,
    createFantasy,
    updateFantasy,
    deleteFantasy
}