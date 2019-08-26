const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    registration_date: {
        type: Date,
        default: Date.now()
    },
    startedBooks: [],
    favouriteBooks: []
})

module.exports = mongoose.model("User", userSchema);