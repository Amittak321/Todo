import express from 'express';

import  {createTask,getTask,editTask,deleteTask} from '../controller/task.controller.js';

const router = express.Router();

router.post("/create", createTask);

router.get("/getTask", getTask);

router.put("/editTask/:id" , editTask);

router.delete("/deleteTask/:id" , deleteTask);


export default router;
// module.exports = router;