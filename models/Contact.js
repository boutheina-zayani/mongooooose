const mongoose=require("mongoose")

const Contact= new mongoose.Schema(
    {
        name:{type:String ,required:true},
        email:{type:String, unique:true ,required:true},
        age:Number
    }
)
module.exports =mongoose.model('contactList',Contact)