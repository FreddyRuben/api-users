const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    user_name: String,
    first_name: String,
    last_name: String,
    age: Number
});

const User = mongoose.model("Usuarios", userSchema);

module.exports = User;