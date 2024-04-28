// Responsible for connecting the Mongoose DB to the Express Server Application
require('dotenv').config();

const mongoose = require("mongoose");

const connectToDB = async() => {
// -> This is how the app connects to our database
    await mongoose.connect(process.env.DB_URL);
    console.log("Currently Connected to MongoDB Cluster");
};

module.exports = connectToDB;