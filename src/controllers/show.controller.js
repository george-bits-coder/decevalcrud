const express = require('express');

const Show = require("../models/show.model");

const { postOne, getAll, getOne, updateOne} = require("./crud.controller");

const router = express.Router();


router.post("/", postOne(Show));
router.get("/", getAll(Show));
router.get("/:id", getOne(Show));
router.patch("/:id", updateOne(Show));



module.exports = router;
