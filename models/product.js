const mongoose = require('mongoose');

// type of data needed by schema -- blueprint
var productSchema = new mongoose.Schema({
    imageLink: { type: String },
    title: { type: String },
    price: { type: String }
});

// to make mongoose model
module.exports = mongoose.model('Product', productSchema);
