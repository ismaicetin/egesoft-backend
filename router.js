var express = require('express');
var router = express.Router();  
const taskController = require("./controllers/TaskController");
 

 

router.get    ('/products',                             taskController.listAllTasks)     
router.post   ('/productManagement',                    taskController.createNewTask )  
router.get    ('/productManagement/:taskid',            taskController.readTask)        
router.put    ('/productManagement/:taskid',            taskController.updateTask)     
router.delete ('/productManagement/:taskid',            taskController.deleteTask)        


module.exports = router;
