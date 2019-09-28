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
const query = req.query;
console.log(query);
var q={}
if (query.category) {q={"productCategory" :{ $in: query.category.split(",") } }}
console.log(q);
    Products.find(q, (err, emitProducts) => {
        if (err) {
            res.status(500).send(err);
        }
        let emitData={
            type:0,//list
            data:emitProducts
        }
        req.sockets.emit('products', emitData)
        res.status(200).json(emitProducts);
    });
};

exports.createNewProduct =  (req, res) => {
    let payload = req.body;
    var newProducts = new Products(payload);
    newProducts.save((err, ProductsData) => {
        if (err) {
            res.status(500).send(err);
        }
        Products.findById(ProductsData._id, (err, emitProducts) => {
            if (err) {console.log(err)}
            let emitData={
                type:1,//create
                data:emitProducts
            }
            req.sockets.emit('products', emitData)
        });
        res.status(201).json(ProductsData);
    });
};

exports.getByIdProduct = async (req, res) => {
    Products.findById(req.params.productId, (err, ProductsData) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(ProductsData);
    });
};

exports.updateProduct = async (req, res) => {
   /* let getProducts = await Products.findById(req.params.productId);
    let payload = req.body;
    //console.log(getProducts); 
    if (!payload.productCategory || !payload.productCategory || !payload.productCategory) {
        res.status(500).json({ "message": "Eksik veri girdiniz" });
        return;
    }

    getProducts.productCategory = payload.productCategory;
    getProducts.productImage = payload.productImage;
    getProducts.productName = payload.productName;*/
    await Products.findOneAndUpdate(
        { _id: req.params.productId }, req.body,
        { new: true },
        (err, ProductsData) => {
            if (err) {
                res.status(500).send(err);
            }
            Products.findById(ProductsData._id, (err, emitProducts) => {
                if (err) {console.log(err)}
                let emitData={
                    type:2,//updata
                    data:emitProducts
                }
                req.sockets.emit('products', emitData)
            });
            res.status(200).json(ProductsData);
        }
    );
};

exports.deleteProduct = (req, res) => {
    Products.remove({ _id: req.params.productId }, (err, ProductsData) => {
        if (err) {
            res.status(404).send(err);
        }
        Products.findById(ProductsData._id, (err, emitProducts) => {
            if (err) {console.log(err)}
            let emitData={
                type:3,//delete
                data:{_id:req.params.productId}
            }
            req.sockets.emit('products', emitData)
        });
        res.status(200).json({ message: "Products successfully deleted" });
    });
};


