// - - - > Allows .env
require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// This pulls our Mongoose connection into application
const connectToDB = require("./config/connectToDB.js");

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//Middleware [Lets you use urlencoded in postman]
app.use(express.urlencoded({ extended: true }));

// Logging Middlewaare
app.use((req, res, next) => {
    const time = new Date();
  
    console.log(
      `-------
    ${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
    );
    if (Object.keys(req.body).length > 0) {
      console.log("Containing the data:");
      console.log(`${JSON.stringify(req.body)}`);
    }
    next();
  });

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//Routes
const comicRoutes = require("./routes/comic");
const fantasyRoutes = require("./routes/fantasy");
const scifiRoutes = require("./routes/scifi");

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// ---> Recieving reqs on cross-origins **
const cors = require("cors");
// Express doesnt naturally convert our data to json
app.use(express.json());
app.use(cors());
// This initializes our connectToDB() function
connectToDB();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// Creating the landing page
app.get("/", (req, res) => {
    res.send("This is a Landing Page");
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//Importing routes
app.use("/comics", comicRoutes);
app.use("/fantasy", fantasyRoutes);
app.use("/scifi", scifiRoutes);


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

app.listen(PORT, () => console.log(`Express Server Listening on port number: http://localhost:${PORT}`));