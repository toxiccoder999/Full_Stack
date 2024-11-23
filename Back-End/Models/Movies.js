const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Rating: { type: Number, required: true },
    Year: { type: Number, required: true },
    Director: { type: String, required: true }
});

module.exports = mongoose.model('Movies', movieSchema);
