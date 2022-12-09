const mongoose = require('mongoose');

// type of data needed by schema
var productSchema = new mongoose.Schema({
    imageLink: { type: String },
    title: { type: String },
    description: { type: String },
    price: { type: String }
});

// to make mongoose model
mongoose.model('Product', productSchema);
