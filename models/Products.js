const mongoose = require("mongoose");
const Schema = mongoose.Schema;

 


var ProductSchema = new Schema({ 
  productName       : {  type: String,  required: true } ,
  productImage      : {  type: String,  required: true } ,
  productPrice      : {  type: Number,  default: null } ,
  productStok       : {  type: Number,  default: null } ,
  productCategory   : {  type: Number,  default: null } 
}, 
{  versionKey: false  
});


module.exports = mongoose.model("Products", ProductSchema);

  