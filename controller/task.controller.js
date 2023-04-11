import todoTask from '../model/todo.schema';
import CustomError from '../util/customError';
import asyncHandler from '../services/asyncHandler';

/************************************************************

@CREATE_TASK
@REQUEST_TYPE POST
@route http://localhost:5000/api/v1/create
@description create task 
@parameters taskName , description
@return task object

*************************************************************/

export const createTask = asyncHandler(async(req,res)=>{
    const{taskName , description} = req.body;
    if (!taskName || !description){
        throw new CustomError("Please enter taskName and description");
    }

    const task = await todoTask.create({
        taskName,
        description
    });

    res.status(200).json({
        success : true,
        task
    })
});

/************************************************************

@GET_TASK
@REQUEST_TYPE GET
@route http://localhost:5000/api/v1/getTask
@description get all task and display
@parameters 
@return task object

*************************************************************/

export const getTask = asyncHandler(async(_req,res)=>{
    const tasks = await find();

    res.status(200).json({
        success:true,
        tasks
    })
});

/************************************************************

@UPDATE_TASK
@REQUEST_TYPE PUT
@route http://localhost:5000/api/v1/editTask
@description get id from params and update the taskname and description
@parameters id form params, taskName, description
@return task object

*************************************************************/

export const editTask = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    if (!id){
        throw new CustomError("ID is missing");
    }
    const{taskName , description} = req.body;
    if (!taskName || !description){
        throw new CustomError("Please enter taskName and description");
    }

    const task = await todoTask.findByIdAndUpdate(id,{taskName,description});

    res.status(200).json({
        success : true,
        task
    });
    
});

/************************************************************

@DELETE_TASK
@REQUEST_TYPE DELETE
@route http://localhost:5000/api/v1/deleteTask
@description get id from params and delete the taskname and description
@parameters id form params
@return task object

*************************************************************/

export const deleteTask = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    if (!id){
        throw new CustomError("ID is missing");
    }
    const task = await todoTask.findByIdAndDelete(id);

    res.status(200).json({
        success: true,
        task
    })

})