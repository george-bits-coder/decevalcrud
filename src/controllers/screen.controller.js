const express = require('express');

const Screen = require("../models/screen.model");

const { postOne, getAll, getOne, updateOne} = require("./crud.controller");

const router = express.Router();


router.post("/", postOne(Screen));
router.get("/", getAll(Screen));
router.get("/:id", getOne(Screen));
router.patch("/:id", updateOne(Screen));



module.exports = router;
