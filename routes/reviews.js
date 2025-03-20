import express from 'express';
import Review from '../models/Reviews.js';

const reviewRouter = express.Router();

reviewRouter.post("/", async (requestAnimationFrame, res) => {
     try {
          const review = new review(req.body);
          await review.save();
          res.status(201).json(review);
     } catch (error) {
          console.error(error);
          res.status(400).json({error: "Invalid review data"});
     }
});

reviewRouter.get("/", async (req, res) => {
     const reviews = await Review.find().populate('userId').populate('restaurantId');
     res.json(reviews);
});


export default reviewRouter;