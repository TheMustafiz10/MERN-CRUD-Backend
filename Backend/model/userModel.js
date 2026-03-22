import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        minlength: [3, 'Name must be at least 2 characters'],

    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    address:{
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        min: [0, 'Age cannot be negative'],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }


})




export default mongoose.model("users", userSchema);