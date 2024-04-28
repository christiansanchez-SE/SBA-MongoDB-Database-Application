// - - - > Allows .env
require("dotenv").config;

const express = require("express");
const app = express();
PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`Express Server Listening on port number: http://localhost:${PORT}`));