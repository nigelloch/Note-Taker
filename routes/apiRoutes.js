const router = require("express").Router();
const { response } = require("express");
const fs = require("fs");
const db = require("../db/db.json");
//const { uuidv1: uuidv1} = require('uuid/v1');

const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// get all notes
router.get("/notes", function (req, res) {
  // read existing notes
  fs.readFile("./db/db.json", function (err, data) {
    if (err) throw err;
    // create the string to display in client
    const notes = JSON.parse(data);
    res.json(notes);
  });
});

// post new note
router.post("/notes", function (req, res) {
  // push new note into db
  db.push(req.body);
  // loop through and assign ID's to notes
  db.forEach((data, i) => {
    data.id = i + 1;
  });
  // move new note to client after processing through JSON
  fs.writeFile("./db/db.json", JSON.stringify(db), function () {
    res.json(db);
  });
});

// delete existing note by id
router.delete("/notes/:id", function (req, res) {
  const id = req.params.id;

  db.splice(id - 1, 1);

  db.forEach((data, i) => {
    data.id = i + 1;
  });

  fs.writeFile("./db/db.json", JSON.stringify(db), function () {
    res.json(db);
  });
});

module.exports = router;
