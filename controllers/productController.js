const express = require("express"); 
const Products = require("../models/Products");


exports.listAllProducts = (req, res) => {
 /*
    req.db.collection("chocolates").find({})
         .toArray()
         .then(results => {
              res.status(200).send(results)
          })
*/
    Products.find({}, (err, Products) => {
        if (err) {
            res.status(500).send(err);
        }
        req.sockets.emit('products', Products)
        res.status(200).json(Products);
    });
};

exports.createNewProduct =  (req, res) => {
    let payload = req.body;
    var newProducts = new Products(payload);
    newProducts.save((err, Products) => {
        if (err) {
            let getProducts =  Products.find({});
            req.sockets.emit('Products', getProducts);
            res.status(500).send(err);
        }
        res.status(201).json(Products);
    });
};

exports.getByIdProduct = async (req, res) => {
    Products.findById(req.params.productId, (err, Products) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(Products);
    });
};

exports.updateProduct = async (req, res) => {
    let getProducts = await Products.findById(req.params.productId);
    let payload = req.body;
    //console.log(getProducts); 
    if (!payload.productCategory || !payload.productCategory || !payload.productCategory) {
        res.status(500).json({ "message": "Eksik veri girdiniz" });
        return;
    }

    getProducts.productCategory = payload.productCategory;
    getProducts.productImage = payload.productImage;
    getProducts.productName = payload.productName;
    Products.findOneAndUpdate(
        { _id: req.params.productId }, getProducts,
        { new: true },
        (err, Products) => {
            if (err) {
                let getProducts = Products.find({});
                req.sockets.emit('Products', getProducts);
                res.status(500).send(err);
            }
            res.status(200).json(Products);
        }
    );
};

exports.deleteProduct = (req, body) => {
    Products.remove({ _id: req.params.productId }, (err, Products) => {
        if (err) {
            res.status(404).send(err);
        }
        let getProducts =  Products.find({});
        req.sockets.emit('Products', getProducts);
        res.status(200).json({ message: "Products successfully deleted" });
    });
};


exports.updatePrice = async (req, res) => {
    let getProducts = await Products.findById(req.params.productId);
    let payload = req.body;
    //console.log(getProducts); 
    if (!payload.productPrice) {
        res.status(500).json({ "message": "Eksik veri girdiniz" });
        return;
    }
    getProducts.productPrice = payload.productPrice;
    Products.findOneAndUpdate(
        { _id: req.params.productId }, getProducts,
        { new: true },
        (err, Products) => {
            if (err) {
                res.status(500).send(err);
            }
            let getProducts =  Products.find({});
            req.sockets.emit('Products', getProducts);
            res.status(200).json(Products);
        }
    );
};


exports.updateStock = async (req, res) => {
    let getProducts = await Products.findById(req.params.productId);
    let payload = req.body;
    //console.log(getProducts); 
    if (!payload.productStok) {
        res.status(500).json({ "message": "Eksik veri girdiniz" });
        return;
    }
    getProducts.productStok = payload.productStok;

    Products.findOneAndUpdate(
        { _id: req.params.productId }, getProducts,
        { new: true },
        (err, Products) => {
            if (err) {
                res.status(500).send(err);
            }
            let getProducts =  Products.find({});
            req.sockets.emit('Products', getProducts);
            res.status(200).json(Products);
        }
    );
};

