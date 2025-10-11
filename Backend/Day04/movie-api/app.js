const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Movie = require("./models/Schema");

require("dotenv").config();

const app = express();
const port = process.env.PORT;
mongoose.connect(process.env.URI);

app.use(express.json());
app.use(cors());

app.get((req, res, next) => {
  next();
});

app.get("/movie", async (req, res) => {
  const movie = await Movie.find();
  res.status(200).json({
    movieList: movie,
  });
});

app.post("/movie", async (req, res) => {
  const { title, genre, director, releaseDate, cast, image } = req.body;
  await Movie.create({ title, genre, director, releaseDate, cast, image });
  res.status(201).json({
    message: "Movie added successfully",
  });
});

app.put('/movie/:id', (req, res) => {
  const { id } = req.params;
  const update = req.body;

  Movie.findByIdAndUpdate(id, update, { new: true, runValidators: true })
    .then((updatedMovie) => {
      if (!updatedMovie) {
        return res.status(404).json({ message: 'Movie not found' });
      }
      res.status(200).json({ message: 'Movie updated successfully', movie: updatedMovie });
    })
    
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
