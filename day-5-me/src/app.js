const express = require("express");

const app = express();

app.use(express.json());

const notes = [];

app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    message: "Note Created",
  });
});

app.get("/notes", (req, res) => {
  res.status(200).json({
    notes: notes,
  });
});

app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].title = req.body.title;

  res.status(200).json({
    message: "Note's title updated",
  });
});

app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];

  res.status(202).json({
    message: "Note Deleted",
  });
});

module.exports = app;
