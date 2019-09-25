const mongoose = require("mongoose");
const Schema = mongoose.Schema;

 


var TaskSchema = new Schema({
  productName   : {  type: String,  required: true } ,
  productImage  : {  type: String,  required: true } 
},{
  versionKey: false 
});


module.exports = mongoose.model("Tasks", TaskSchema);
