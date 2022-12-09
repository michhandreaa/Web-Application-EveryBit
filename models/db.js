const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:123@cluster0.afllrto.mongodb.net/EveryBitDB?retryWrites=true&w=majority',{useNewUrlParser:true},(err)=>{
    if (!err) {
        console.log('MongoDB connected');
    } else {
        console.log('error: '+err);
    }
});

require('./order.model');
require('./product')