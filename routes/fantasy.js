const express = require("express");
const router = express.Router();

const fantasyController = require('../controllers/fantasyController');

    // Obj: We want to establish CRUD routes for our Notes Model

// -----------------> GET all Notes - [Read]
router.get("/", fantasyController.fetchAllFantasies);
// -----------------> GET a Specific Note by ID - [Read]
router.get("/:id", fantasyController.fetchFantasy);
// -----------------> Create a Notes - [Create / POST]
router.post("/", fantasyController.createFantasy);
// -----------------> Update a Specific Note - [Update]
router.put("/:id", fantasyController.updateFantasy);
// -----------------> Delete a Specific Note - [Delete]
router.delete("/:id", fantasyController.deleteFantasy);

module.exports = router;