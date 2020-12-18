const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    name: { type: String, trim: true },
    description: { type: String, trim: true },
}, { collection: 'product' });

module.exports = mongoose.model('product', productSchema);