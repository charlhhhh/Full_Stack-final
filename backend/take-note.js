const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Note model
const Note = require('./models/Note');

// Routes
app.get('/notes', async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
});

app.post('/notes', async (req, res) => {
    const newNote = new Note(req.body);
    const savedNote = await newNote.save();
    res.json(savedNote);
});

app.delete('/notes/:id', async (req, res) => {
    const result = await Note.findByIdAndDelete(req.params.id);
    res.json(result);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
