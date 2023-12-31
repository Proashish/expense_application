const mongoose = require('mongoose')

//schema design
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is  required'] // true means must have to provide 
    },
    email:{
        type:String,
        required:[true,'email is required and should be unique'],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"],

    },

},{timestamps:true} // use to store the data and time of the data store
);

//export 
const userModel = mongoose.model('users',userSchema)
module.exports =userModel