
const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    imageLink: { type: String },
    title: { type: String },
    description: { type: String },
    price: { type: String }
});

mongoose.model('Product', productSchema);
