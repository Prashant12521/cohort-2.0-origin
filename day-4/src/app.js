// server create karna
// server ko config karna

const express = require("express");

const app = express(); //server create ho jata h

app.use(express.json());

const notes = [];

// {
//   title:'test title 1',
//   description: 'test description 1'
// }

app.get("/", (req, res) => {
  res.send("Hello");
});

// post method - api /notes

app.post("/notes", (req, res) => {
  console.log(req.body);

  notes.push(req.body);

  console.log(notes);

  res.send("note created");
});

// get method - /notes api

app.get("/notes", (req, res) => {
  res.send(notes);
});

// delete method - /notes
// params

// delete - /notes/index
// delete - /notes/2
// this method are called request.params

app.delete("/notes/:index", (req, res) => {
  // console.log(req.params.index);
  delete notes[req.params.index];

  res.send("notes deleted");
});

// PATCH - /notes/:index
// req.body = {description : 'sample modified description.'}

app.patch('/notes/:index',(req,res)=>{
  notes[req.params.index].description = req.body.description

  res.send('Note updated successfully')
})

module.exports = app;
