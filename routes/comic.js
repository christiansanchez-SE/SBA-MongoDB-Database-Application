const express = require("express");
const router = express.Router();

const comicsController = require('../controllers/comicsController');

    // Obj: We want to establish CRUD routes for our Notes Model

// -----------------> GET all Notes - [Read]
router.get("/", comicsController.fetchAllComics);
// -----------------> GET a Specific Note by ID - [Read]
router.get("/:id", comicsController.fetchComic);
// -----------------> Create a Notes - [Create / POST]
router.post("/", comicsController.createComic);
// -----------------> Update a Specific Note - [Update]
router.put("/:id", comicsController.updateComic);
// -----------------> Delete a Specific Note - [Delete]
router.delete("/:id", comicsController.deleteComic);

module.exports = router;