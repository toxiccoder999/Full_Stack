
const mongoose = require('mongoose');

const studSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Rollno: { type: Number, required: true },
    Branch: { type: String, required: true },
    Year: { type: Number, required: true },
    SGPA: { type: Number, required: true }
});

module.exports = mongoose.model('Students', studSchema);
