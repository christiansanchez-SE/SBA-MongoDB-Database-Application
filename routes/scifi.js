const express = require("express");
const router = express.Router();

const scifiController = require('../controllers/scifiController');

    // Obj: We want to establish CRUD routes for our Notes Model

// -----------------> GET all Notes - [Read]
router.get("/", scifiController.fetchAllScifis);
// -----------------> GET a Specific Note by ID - [Read]
router.get("/:id", scifiController.fetchScifi);
// -----------------> Create a Notes - [Create / POST]
router.post("/", scifiController.createScifi);
// -----------------> Update a Specific Note - [Update]
router.put("/:id", scifiController.updateScifi);
// -----------------> Delete a Specific Note - [Delete]
router.delete("/:id", scifiController.deleteScifi);

module.exports = router;