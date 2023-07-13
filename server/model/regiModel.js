const express=require("express")
const mongoose=require("mongoose")
const {Schema}=mongoose;

const regiSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    pass:{
        type:String,
        require:true
    },
})

module.exports=mongoose.model("Userinfo",regiSchema)