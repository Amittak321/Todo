import mongoose from "mongoose";


const todoSchema = mongoose.Schema({
    taskName :{
        type : String,
        maxLength : [10,"Task Name should not be grater than 10" ],
        trim: true,
        required:[true,"Please enter task name"]
    },
    description :{
        type : String,
        maxLength : [25,"Task Name should not be grater than 25" ],
        trim: true,
        required:[true,"Please enter description"]
    }
},
{
  timestamps: true, // Mongoose will add two properties of type Date to your schema: 1-createdAt , 2-updatedAt
});

export default mongoose.model("todoTask", todoSchema);