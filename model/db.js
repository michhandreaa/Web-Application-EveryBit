const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecommerceOrders', {useNewUrlParser: true}, (err) => {
 
    if (!err) {
        console.log('Connect to db in MongoDB succesful');
    } else{
        console.log('error: ' + err);
    }
});

require('./order.model');