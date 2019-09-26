const mongoose = require("mongoose");
 mongoose.set('useCreateIndex', true);
const dbURI ="mongodb://127.0.0.1:27017/egesoft";

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10,
  useNewUrlParser: true,
  useUnifiedTopology: true
};


exports.dbconnection= function (req, res, next) { 

  mongoose.connect(dbURI, options,function(err,db){
    if(err){
        console.log(err);
        req.db=db;
    }
    else {
        console.log(dbURI + "veritabanına baglanıldı");
        db.close();
        next();
    }
  })

}