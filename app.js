
var express = require('express');
var bodyParser = require('body-parser')
var app = express(); 
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', () =>{
  console.log('a user is connected')
})
// db connection
require("./config/db");



const port = process.env.PORT || 4001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API ENDPOINTS

app.use('/api', require("./router"))



 

var server = http.listen(port, () => {
  console.log(`Server (Açmak için ctrl + Left click) http://localhost:${port}`);
});