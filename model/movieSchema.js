const mongoose=require('mongoose');
const reviewSchema=new mongoose.Schema({
    content:String,
    rating:Number,
    author:String,
    createdAt:{type:Date,default:Date.now()}
})
const movieSchema=new mongoose.Schema({
    title:String,
    description:String,
    genre:String,
    releaseYear:Number,
    review:{type:[reviewSchema]}
})
module.exports=mongoose.model("movie",movieSchema);