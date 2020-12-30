const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, trim: true },
    surname: { type: String, trim: true },
    age: { type: Number, trim: true },
    password: { type: String, trim: true },
}, { collection: 'user' });

module.exports = mongoose.model('user', userSchema);