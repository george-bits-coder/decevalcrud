const express = require('express');

const User = require("../models/user.model");

const { postOne, getAll, getOne, updateOne } = require("./crud.controller");

const router = express.Router();


router.post("/", postOne(User));
router.get("/", getAll(User));
router.get("/:id", getOne(User));
router.patch("/:id", updateOne(User));



module.exports = router;