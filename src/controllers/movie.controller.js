const express = require('express');

const Movie = require("../models/movie.model");

const { postOne, getAll, getOne, updateOne, deleteOne } = require("./crud.controller");

const router = express.Router();


router.post("/", postOne(Movie));
router.get("/", getAll(Movie));
router.get("/:id", getOne(Movie));
router.patch("/:id", updateOne(Movie));
router.delete("/:id", deleteOne(Movie));


module.exports = router;