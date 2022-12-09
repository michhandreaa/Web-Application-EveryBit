var Product = Require('../models/product');

const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:123@cluster0.afllrto.mongodb.net/EveryBitDB?retryWrites=true&w=majority');

var products = [

    new Product({
        imageLink: '/public/img/computers/computer1',
        title: 'Legion Gaming PC',
        price: '20000.00'
    }),

    new Product({
        imageLink: '/public/img/computers/computer2',
        title: 'iBUYPOWER BB985V2',
        price: '15000.00'
    }),

    new Product({
        imageLink: '/public/img/computers/computer3',
        title: 'iBUYPOWER Element Mini',
        price: '18000.00'
    }),

    new Product({
        imageLink: '/public/img/computers/computer4',
        title: 'SkyTech Archangel 3.0',
        price: '23000.00'
    }),

    new Product({
        imageLink: '/public/img/computers/computer5',
        title: 'ABS Master ALI432',
        price: '16000.00'
    }),

    new Product({
        imageLink: '/public/img/computers/computer6',
        title: 'Aegis se 10si',
        price: '13000'
    })
];

var done = 0;

for (var i = 0; i < products.length; i++) {
    products[i].save((err, result) => {
        done++;
        if (done == products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}