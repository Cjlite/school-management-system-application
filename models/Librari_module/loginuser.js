const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    userName: String
})

const user = mongoose.model("users", userSchema);

module.exports = user;