const mongoose = require('mongoose');

const { Schema } = mongoose;

const usersSchema = new Schema({
    name: { type: String, trim: true },
    surname: { type: String, trim: true },
    age: { type: Number, trim: true },
}, { collection: 'users' });

module.exports = mongoose.model('users', usersSchema);