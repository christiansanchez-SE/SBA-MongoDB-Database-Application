// - - - > Allows .env
require("dotenv").config;

const express = require("express");
const app = express();
PORT = process.env.PORT || 3000;

// This pulls our Mongoose connection into application
const connectToDB = require("./config/connectToDB.js");

// Importing the Comic moduel from "comic"
const Comic = require("./models/comic");
const Fantasy = require("./models/fantasy");

// Importing the comicsController.js
const comicsController = require("./controllers/comicsController.js");
const fantasyController = require("./controllers/fantasyController.js")

//Middleware [Lets you use urlencoded in postman]
app.use(express.urlencoded({ extended: true }));

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
// -----------------> Update a Specific Note - [Update]
app.put("/comics/:id", comicsController.updateComic);
// -----------------> Delete a Specific Note - [Delete]
app.delete("/comics/:id", comicsController.deleteComic);


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

    // Obj: We want to establish CRUD routes for our Notes Model

// -----------------> GET all Notes - [Read]
app.get("/fantasy", fantasyController.fetchAllFantasies);
// -----------------> GET a Specific Note by ID - [Read]
app.get("/fantasy/:id", fantasyController.fetchFantasy);
// -----------------> Create a Notes - [Create / POST]
app.post("/fantasy", fantasyController.createFantasy);
// -----------------> Update a Specific Note - [Update]
app.put("/fantasy/:id", fantasyController.updateFantasy);
// -----------------> Delete a Specific Note - [Delete]
app.delete("/fantasy/:id", fantasyController.deleteFantasy);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

    // Obj: We want to establish CRUD routes for our Notes Model

// -----------------> GET all Notes - [Read]
// -----------------> GET a Specific Note by ID - [Read]
// -----------------> Create a Notes - [Create / POST]
// -----------------> Update a Specific Note - [Update]
// -----------------> Delete a Specific Note - [Delete]




app.listen(PORT, () => console.log(`Express Server Listening on port number: http://localhost:${PORT}`));