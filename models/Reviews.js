import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
     {
          userId: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'User',
               required: true,
          },
          restaurantId: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'Restaurant',
               required: true,
          },
          rating: {
               type: Number,
               required: true,
               min: 1,
               max: 5
          },
          comment: {
               type: String,
               required: true
          }
     },
     {timestamps: true}
);

// Indexing...
reviewSchema.index({location: 1});
reviewSchema.index({cuisine: 1});


export default mongoose.model('Review', reviewSchema);
