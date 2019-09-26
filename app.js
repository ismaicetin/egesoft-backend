
var express = require('express');
var bodyParser = require('body-parser')
var app = express(); 
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', socket => {
  console.log('New client connected')
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

// db connection
require("./config/db");



const port = process.env.PORT || 4001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


socketsConnection = (req, res,next ) => {
  req.sockets=io.sockets;

 console.log("denme");
 next();
 //io.sockets.emit('products', "color")
 //res.status(200).json({});
};


app.use(socketsConnection)     

// API ENDPOINTS
app.use('/api', require("./router"))



 

var server = http.listen(port, () => {
  console.log(`Server (Açmak için ctrl + Left click) http://localhost:${port}`);
});