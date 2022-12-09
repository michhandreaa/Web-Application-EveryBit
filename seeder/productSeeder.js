var Product = Require('../models/product')

const express = require('express');
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

mongoose.connect('mongodb+srv://admin:123@cluster0.afllrto.mongodb.net/EveryBitDB?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {

var products = [
    new product({
        imageLink: '/public/img/computers/computer1',
        title: 'Legion Gaming PC',
        description: 'lorem ipsum dolor sit amet',
        price: '20000.00',
    }),
    new product({
        imageLink: '/public/img/computers/computer2',
        title: 'iBUYPOWER BB985V2',
        description: 'lorem ipsum dolor sit amet',
        price: '15000.00',
    }),
    new product({
        imageLink: '/public/img/computers/computer3',
        title: 'iBUYPOWER Element Mini',
        description: 'lorem ipsum dolor sit amet',
        price: '18000.00',
    }),
    new product({
        imageLink: '/public/img/computers/computer4',
        title: 'SkyTech Archangel 3.0',
        description: 'lorem ipsum dolor sit amet',
        price: '23000.00',
    }),
    new product({
        imageLink: '/public/img/computers/computer5',
        title: 'ABS Master ALI432',
        description: 'lorem ipsum dolor sit amet',
        price: '16000.00',
    }),
    new product({
        imageLink: '/public/img/computers/computer6',
        title: 'Aegis se 10si',
        description: 'lorem ipsum dolor sit amet',
        price: '13000',
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}