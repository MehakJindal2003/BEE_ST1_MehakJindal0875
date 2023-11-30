const express=require('express');
const router=express.Router();
const controller=require('../controller/controller');

router.get('/getAllMovies/movies',controller.getAllMovies);
router.get('/getMoviesById/movies/:movieId',controller.getMoviesByID);
router.post('/postMovies/movies',controller.postMovie);
router.put('/updateMovie/:movieId',controller.updateMovieByID);
router.delete('/deleteMovie/movies/:movieId',controller.deleteMovieById);
router.get('/movies/:movieId/getReviews',controller.getReviews);
router.get('/movies/:movieId/reviewById/:reviwId',controller.getReviewById)
router.post('/movies/:movieId/addReview',controller.createReview);
router.put('/movies/:movieId/updateReviews/:reviewId',controller.updateReview);
router.delete('/movies/:movieId/deleteReviews/:reviewId',controller.deleteReview);

module.exports=router;