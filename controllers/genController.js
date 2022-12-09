<<<<<<< HEAD:controllers/genController.js
// Require
const express = require('express');
const mongoose = require('mongoose');
const Order = mongoose.model('Order');
const Product = require('../models/product')

var router= express.Router();
mongoose.set('useFindAndModify', false);

// Router FOR GETTING PAGES
router.get('/',(req,res)=>{
    res.render('index');
});

router.get('/computers', (req, res) => {
    /*
    Product.find(function (err, docs) {
        var productChunks = [];
        var chunkSize = 3;
        for(var i = 0; i < docs.length; i += chunkSize){
            productChunks.push(docs.slice(i, i + chunkSize));
        } */
        res.render('products/computers', { products: docs });
  //  });
});

router.get('/phones', (req, res) => {
    res.render('products/phones');
});

router.get('/accesories', (req, res) => {
    res.render('products/accesories');
});

router.get('/cart',(req,res)=>{
    res.render('cart');
});

router.get('/order',(req,res)=>{
    res.render('order');
});

router.get('/admin',(req,res)=>{
    Order.find((err,docs)=>{
        if (!err) {
            res.render("admin",{
                order:docs
            });
        } else {
             console.log('Error in order: '+ err);    
        }
    });
});

router.get('/order/:id',(req,res)=>{
    Order.findById(req.params.id,(err,doc)=>{
        if (!err) {
                res.render("orders",{order:doc});
        } else {
            console.log('Error findbyId: '+ err);  
        }
    });
});

router.get('/order/delete/:id',(req,res)=>{
    Order.findByIdAndRemove(req.params.id,(err,doc)=>{
        if (!err) {
                res.redirect('/admin');
        } else {
            console.log('Error in delete: '+ err);  
        }
    });
});

// POST
router.post('/cart',(req,res)=>{
    insertOrder(req,res);
});
router.post('/order',(req,res)=>{
    updateOrder(req,res);
});

// Functions
function updateOrder(req,res) {
    Order.findOneAndUpdate({_id:req.body._id},req.body,{new:true},(err,doc)=>{
        if (!err) {
                res.redirect('/admin');
        } else {
                console.log('Update error '+err);
        }
    });
}
function insertOrder(req,res) {
    var d= new Date();
    var t=d.getTime();
    var counter= t;
    counter+=1;
    var order=new Order();
    order.total=req.body.total;
    order.order=counter;
    order.save((err,doc)=>{
        if (!err) {
                console.log('order: '+order);
                res.redirect('/admin');
        } else {
            console.log('Error insertOrder: '+err);
        }
    });
}

module.exports=router;

=======
// Require
const express= require('express');
const mongoose= require('mongoose');
const Order=  mongoose.model('Order'); 

const router= express.Router();
mongoose.set('useFindAndModify', false);

// Router
router.get('/',(req,res)=>{
    res.render('menu');
});

router.get('/computers', (req, res) => {
    res.render('computers');
});

router.get('/phones', (req, res) => {
    res.render('phones');
});

router.get('/accesories', (req, res) => {
    res.render('accesories');
});

router.get('/cart',(req,res)=>{
    res.render('cart');
});

router.get('/order',(req,res)=>{
    res.render('order');
});

router.get('/admin',(req,res)=>{
    Order.find((err,docs)=>{
        console.log(err)
        if (!err) {
            res.render("admin",{
                order:docs
            });
        } else {
             console.log('Error in order: '+ err);    
        }
    });
});

router.get('/order/:id',(req,res)=>{
    Order.findById(req.params.id,(err,doc)=>{
        if (!err) {
                res.render("orders",{order:doc});
        } else {
            console.log('Error findbyId: '+ err);  
        }
    });
});

router.get('/order/delete/:id',(req,res)=>{
    Order.findByIdAndRemove(req.params.id,(err,doc)=>{
        if (!err) {
                res.redirect('/admin');
        } else {
            console.log('Error in delete: '+ err);  
        }
    });
});

// POST
router.post('/cart',(req,res)=>{
    insertOrder(req,res);
});
router.post('/order',(req,res)=>{
    updateOrder(req,res);
});

// Functions
function updateOrder(req,res) {
    Order.findOneAndUpdate({_id:req.body._id},req.body,{new:true},(err,doc)=>{
        if (!err) {
                res.redirect('/admin');
        } else {
                console.log('Update error '+err);
        }
    });
}
function insertOrder(req,res) {
    var d= new Date();
    var t=d.getTime();
    var counter= t;
    counter+=1;
    var order=new Order();
    order.total=req.body.total;
    order.order=counter;
    order.save((err,doc)=>{
        if (!err) {
                console.log('order: '+order);
                res.redirect('/admin');
        } else {
            console.log('Error insertOrder: '+err);
        }
    });
}

module.exports=router;

>>>>>>> 1280b43080f5cec7ba209ef19126ffdd239f8ffc:controllers/orderController.js
