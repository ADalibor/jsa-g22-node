const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Mora da ima naslov'],
    },
    year: {
        type: Number,
        required: [true, 'Mora da ima godina'],
    },
    released: {
        type: Date,
        required: [true, 'Mora da ima godina'],
    },
    genre: {
        type: String,
        required: [true, 'Mora da ima zanr'],
    },
    director: {
        type: String,
        required: [true, 'Mora da ima reziser'],
    },
    plot: {
        type: String,
        required: [true, 'Mora da ima dejstvie'],
    },
    metascore: {
        type: Number,
        required: [true, 'Mora da ima ocenka'],
    },
    imdbRating: {
        type: Number,
        required: [true, 'Mora da ima rejting'],
    },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;