const reviewSchema=require('../model/reviewSchema');
const movieSchema=require('../model/movieSchema');

exports.getAllMovies=async(req,res)=>{
    let movie;
    try{
        movie=await movieSchema.find();
    }
    catch(err){
        res.send({error:err.message})
    }
    if(!movie){
        return res.send({message:"No movies found"})
    }
    return res.send({movie})
}

exports.getMoviesByID=async(req,res)=>{
    const id=req.params.movieId;
    let movie;
    try{
        movie=await movieSchema.findById(id);
    }
    catch(err){
        res.send({error:err.message})
    }
    if(!movie){
        return res.send({message:"No movies found"})
    }
    return res.send({movie})
}

exports.postMovie=async(req,res)=>{
    const inputData=req.body;
    try{
        const details=await movieSchema.create(inputData);
        return res.send({message:"Movie Successfully added"})
    }
    catch(err){
        return res.send({message:"Movie not added"})
    }
}

exports.updateMovieByID=async(req,res)=>{
    const id=req.params.movieId;
    const {title,description,genre,releaseYear}=req.body;
    let movie;
    try{
        movie=await movieSchema.findByIdAndUpdate(id,{
            title,description,genre,releaseYear
        })
        await movie.save();
        res.send({message:"Movie Updated"})
    }
    catch(err){
        res.send({message:"Movie not updated"})
    }
}

exports.deleteMovieById=async(req,res)=>{
    const id=req.params.movieId;
    let movie;
    try{
        movie=await movieSchema.findByIdAndDelete(id);
        return res.send({message:"Movie Successfully Deleted"})
    }
    catch(err){
        return res.send({message:"Movie not deleted by this ID"})
    }
}

exports.createReview=async(req,res)=>{
    const id=req.params.movieId;
    let movie;
    try{
        movie=await movieSchema.findById(id);
        if(movie)
        {
            const inputData=req.body;
            const review=await reviewSchema.create(inputData);
            return res.send({message:"Review Successfully added to movie"})
        }
        else
        {
            return res.send({message:"Movie not found by this ID"})
        }
    }
    catch(err){
        return res.send({message:"Error Occurred"})
    }
}

exports.getReviews=async(req,res)=>{
    const id=req.params.movieId;
    let movie;
    try{
        movie=await movieSchema.findById(id);
        if(movie)
        {
            let review;
            review=await reviewSchema.find();
            return res.send({review});
        }
        else
        {
            return res.send({message:"Movie not found by this ID"})
        }
    }
    catch(err){
        return res.send({message:"Error Occurred"})
    }
}

exports.getReviewById=async(req,res)=>{
    const id=req.params.movieId;
    let movie;
    try{
        movie=await movieSchema.findById(id);
        if(movie)
        {
            let review;
            let revId=req.params.reviewId;
            review=await reviewSchema.findById(revId);
            return res.send({review});
        }
        else
        {
            return res.send({message:"Movie not found by this ID"})
        }
    }
    catch(err){
        return res.send({message:"Error Occurred"})
    }
}

exports.updateReview=async(req,res)=>{
    const id=req.params.movieId;
    let movie;
    try{
        movie=await movieSchema.findById(id);
        if(movie)
        {
            let review;
            const revId=req.params.reviewId;
            const {content,rating,author,createdAt}=req.body;
            review=await reviewSchema.findByIdAndUpdate(revId,{
                content,rating,author,createdAt
            });
            await review.save();
            res.send({message:"Review Updated"})
        }
        else{
            res.send({message:"Movie not found"})
        }
    }
    catch(err)
    {
        res.send({error:err.message});
    }
}

exports.deleteReview=async(req,res)=>{
    const id=req.params.movieId;
    let movie;
    try{
        movie=await movieSchema.findById(id);
        if(movie)
        {
            let review;
            const revId=req.params.reviewId;
            review=await reviewSchema.findByIdAndDelete(revId);
            res.send({message:"Review Deleted"})
        }
        else{
            res.semd({message:"Movie not found"})
        }
    }
    catch(err){
        res.send({error:err.message});
    }
}