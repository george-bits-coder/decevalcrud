const express = require('express');

const app = express();

app.use(express.json());


const movieController = require("./controllers/user.controller");
const theatreController = require("./controllers/theatre.controller");
const screenController = require("./controllers/screen.controller");
const showController = require("./controllers/show.controller");
const seatController = require("./controllers/seat.controller");


app.use("/movies", movieController);
app.use("/theatres", theatreController);
app.use("/screens", screenController);
app.use("/shows", showController);
app.use("/seats", seatController);

const {register, login} = require('./controllers/auth.contoller');
app.use('/login', login);
app.use('/register', register);

module.exports = app;
