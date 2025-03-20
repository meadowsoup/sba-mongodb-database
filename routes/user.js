import express, { Router } from 'express';
import Users from '../models/Users.js';


const userRouter = express.Router();

// create user
userRouter.post('/', async (req, res) => {
     try{
          const user = new Users(req.body);
          await user.save();
          res.status(201).json(user);
     } catch(e) {
          console.error(e)
          res.status(400).json({error: "Invalid user data"});
     }
});

// get users
userRouter.get('/', async (req, res) => {
     const users = await Users.find();
     res.json(users);
});


export default userRouter;