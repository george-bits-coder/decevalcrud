const express = require('express');

const Seat = require("../models/seat.model");

const { postOne, getAll, getOne, updateOne } = require("./crud.controller");

const router = express.Router();


router.post("/", postOne(Seat));
router.get("/", getAll(Seat));
router.get("/:id", getOne(Seat));
router.patch("/:id", updateOne(Seat));



module.exports = router;
