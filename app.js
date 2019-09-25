const express = require("express");
const bodyParser = require("body-parser");
const taskController = require("./controllers/TaskController");
const app = express();
// db connection
require("./config/db");



const port = process.env.PORT || 3301;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API ENDPOINTS

app.use('/api', require("./router"))




app.listen(port, () => {
  console.log(`Server (Açmak için ctrl + Left click) http://localhost:${port}`);
});
