import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/Users.js"; // Adjust paths based on your structure
import Restaurant from "./models/Restaurant.js";
import Review from "./models/Reviews.js";

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB for seeding"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Restaurant.deleteMany({});
    await Review.deleteMany({});
    console.log("Cleared existing data");

    // 🌟 Seed Users (Justice League Members)
    const users = await User.insertMany([
      { username: "Superman", email: "clark@dailyplanet.com", password: "kryptonian" },
      { username: "Batman", email: "bruce@wayneenterprise.com", password: "darkknight" },
      { username: "Wonder Woman", email: "diana@amazon.com", password: "themyscira" },
      { username: "Flash", email: "barry@ccpd.com", password: "speedforce" },
      { username: "Aquaman", email: "arthur@atlantis.com", password: "trident" },
      { username: "Green Lantern", email: "hal@corps.com", password: "willpower" },
      { username: "Martian Manhunter", email: "jonn@mars.com", password: "mindreader" },
      { username: "Cyborg", email: "victor@star.com", password: "booyah" },
      { username: "Green Arrow", email: "oliver@queen.com", password: "archer" },
      { username: "Shazam", email: "billy@shazam.com", password: "magicword" },
    ]);
    console.log("Seeded users:", users);

    // 🌟 Seed Restaurants
    const restaurants = await Restaurant.insertMany([
      { name: "BatBurger", location: "Gotham City", cuisine: "Fast Food" },
      { name: "Flash Tacos", location: "Central City", cuisine: "Mexican" },
      { name: "Atlantean Seafood", location: "Atlantis", cuisine: "Seafood" },
      { name: "Paradise Island Diner", location: "Themyscira", cuisine: "Greek" },
      { name: "Big Belly Burger", location: "Metropolis", cuisine: "Fast Food" },
    ]);
    console.log("Seeded restaurants:", restaurants);

    // 🌟 Seed Reviews
    const reviews = await Review.insertMany([
      { userId: users[0]._id, restaurantId: restaurants[4]._id, rating: 5, comment: "Super good!" },
      { userId: users[1]._id, restaurantId: restaurants[0]._id, rating: 4, comment: "Dark and moody, just like me." },
      { userId: users[2]._id, restaurantId: restaurants[3]._id, rating: 5, comment: "A taste of home!" },
      { userId: users[3]._id, restaurantId: restaurants[1]._id, rating: 3, comment: "Could be faster!" },
      { userId: users[4]._id, restaurantId: restaurants[2]._id, rating: 5, comment: "Seafood fit for a king!" },
    ]);
    console.log("Seeded reviews:", reviews);

    console.log("🎉 Database seeding completed!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database", error);
    mongoose.connection.close();
  }
};

// Run the function
seedDatabase();
