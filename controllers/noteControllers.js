const asyncHandler = require("express-async-handler");
const Notes = require("../models/noteModel");

// @desc Get Notes
// @route GET /api/notes
// @access Public

const getNotes = asyncHandler(async (req, res) => {
  const notes = await Notes.find();
  res.status(200).json({ success: true, data: notes });
});

// @desc Get Single Note
// @route GET /api/note/:id
// @access Public

const getNote = asyncHandler(async (req, res) => {
  const note = await Notes.findById(req.params.id);
  if (!note) {
    res.status(404);
    throw new Error("Note not found");
  }
  res.json({ success: true, data: note });
});

// @desc Create notes
// @route POST /api/notes
// @access Public

const createNotes = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("fill the required fields");
  }

  const note = await Notes.create({
    title: req.body.title || "Untitled Note",
    text: req.body.text,
  });

  res.status(201).json({ success: true, data: note });
});

// @desc Update notes
// @route PUT /api/notes/:id
// @access Public

const updateNote = asyncHandler(async (req, res) => {
  const note = await Notes.findById(req.params.id);
  if (!note) {
    res.status(404);
    throw new Error("Note with id does not exist");
  }

  const updateNote = await Notes.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({ success: true, data: updateNote });
});

// @desc Delete notes
// @route DELETE /api/notes/:id
// @access Public

const deleteNote = asyncHandler(async (req, res) => {
  const note = await Notes.findById(req.params.id);
  if (!note) {
    res.status(404);
    throw new Error("Note with id not found");
  }

  await note.remove();
  res.json({ success: true, _id: note.id });
});

module.exports = {
  getNotes,
  createNotes,
  getNote,
  updateNote,
  deleteNote,
};
