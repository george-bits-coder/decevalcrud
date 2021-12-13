const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb+srv://georgegid:hello1234@cluster0.9ssus.mongodb.net/test");
};
