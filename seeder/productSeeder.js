
var Product = Require
const express = require('express');
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

var product = [
    new product({
        imageLink: '/public/img/computers/computer1',
        title: 'computer 1',
        description: 'lorem ipsum dolor sit amet',
        price: '$1',
    }),
    new product({
        imageLink: '/public/img/computers/computer2',
        title: 'computer 1',
        description: 'lorem ipsum dolor sit amet',
        price: '$2',
    }),
    new product({
        imageLink: '/public/img/computers/computer3',
        title: 'computer 1',
        description: 'lorem ipsum dolor sit amet',
        price: '$3',
    }),
    new product({
        imageLink: '/public/img/computers/computer4',
        title: 'computer 1',
        description: 'lorem ipsum dolor sit amet',
        price: '$4',
    }),
    new product({
        imageLink: '/public/img/computers/computer5',
        title: 'computer 1',
        description: 'lorem ipsum dolor sit amet',
        price: '$5',
    }),
    new product({
        imageLink: '/public/img/computers/computer6',
        title: 'computer 1',
        description: 'lorem ipsum dolor sit amet',
        price: '$6',
    })
];