const express = require('express');

const Theatre = require("../models/theatre.model");

const { postOne, getAll, getOne, updateOne} = require("./crud.controller");

const router = express.Router();


router.post("/", postOne(Theatre));
router.get("/", getAll(Theatre));
router.get("/:id", getOne(Theatre));
router.patch("/:id", updateOne(Theatre));


module.exports = router;
