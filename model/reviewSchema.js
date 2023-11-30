const mongoose=require('mongoose');
const reviewSchema=new mongoose.Schema({
    content:String,
    rating:Number,
    author:String,
    createdAt:{type:Date,default:Date.now()}
})
module.exports=mongoose.model("review",reviewSchema);