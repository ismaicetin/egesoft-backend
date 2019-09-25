const mongoose = require("mongoose");
const Schema = mongoose.Schema;

 


var CategorySchema = new Schema({
  categoryId   : {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true
  } ,
  categoryName  : {  type: String,  required: true } 
},{ 
  versionKey: false 
});


module.exports = mongoose.model("Categorys", CategorySchema);
