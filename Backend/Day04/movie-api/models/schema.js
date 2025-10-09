const mongoose  = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    director: {
        type: String,
        requird: true
    },
    releaseDate: {
        type: Date,
        required: false
    },
    cast: {
        type: Array,
        required: true
    },
    image: {
        type: String,
        requird: true
    }

});

const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie;