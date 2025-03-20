import express from 'express';
import Restaurant from '../models/Restaurant.js';

const restaurantRouter = express.Router();


restaurantRouter.post("/", async () => {
     try {
          const restaurant = new Restaurant(req.body);
          await restaurant.save();
          res.status(201).json(restaurant);
     } catch (error) {
          console.error(error);
          res.status(400).json({error: "Invalid restaurant data"});
     }
});


restaurantRouter.get("/", async (req, res) => {
     const restaurants = await Restaurant.find();
     res.json(restaurants);
});


export default restaurantRouter;