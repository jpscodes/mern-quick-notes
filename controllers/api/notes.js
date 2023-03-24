const Note = require('../../models/note');

module.exports = {
  index,
  create
};

async function index(req, res) {
  const notes = await Note.find({});
  res.json(notes);
}

async function create(req, res) {
  console.log(req.user)
  req.body.user = req.user._id
  console.log(req.body.user, 'req.body.user')
  const newNote = await Note.create(req.body)
  res.json(newNote);
}
