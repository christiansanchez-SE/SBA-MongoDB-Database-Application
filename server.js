// - - - > Allows .env
require("dotenv").config;

const express = require("express");
const app = express();
PORT = process.env.PORT || 3000;

// This pulls our Mongoose connection into application
const connectToDB = require("./config/connectToDB.js");

// Im porting the Comic moduel from "comic"
const Comic = require("./models/comic");

const comicsController = require("./controllers/comicsController.js");

// ---> Recieving reqs on cross-origins **
const cors = require("cors");
// Express doesnt naturally convert our data to json
app.use(express.json());
app.use(cors());
// This initializes our connectToDB() function
connectToDB();


// Creating the landing page
app.get("/", (req, res) => {
    res.send("This is a Landing Page");
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

    // Obj: We want to establish CRUD routes for our Notes Model

// -----------------> GET all Notes - [Read]
app.get("/comics", comicsController.fetchAllComics);
// -----------------> GET a Specific Note by ID - [Read]
app.get("/comics/:id", comicsController.fetchComic);
// -----------------> Create a Notes - [Create / POST]
app.post("/comics", comicsController.createComic);




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 



app.listen(PORT, () => console.log(`Express Server Listening on port number: http://localhost:${PORT}`));