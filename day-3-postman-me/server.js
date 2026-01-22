const express = require("express");
const app = express();

app.use(express.json());

const notes = [];

app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.send("notes created");
});

app.get("/notes", (req, res) => {
  res.send(notes);
  console.log(notes);
});

app.listen(3000, () => {
  console.log("Server Started, 3000");
});
