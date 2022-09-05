const express = require("express");
const router = express.Router();
const {
  getNotes,
  getNote,
  createNotes,
  updateNote,
  deleteNote
} = require("../controllers/noteControllers");

router.route("/").get(getNotes).post(createNotes);
router.route("/:id").get(getNote).delete(deleteNote).put(updateNote);

module.exports = router;
