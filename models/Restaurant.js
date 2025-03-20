import mongoose from "mongoose";

const resSchema = new mongoose.Schema(
     {
          name: {
               type: String,
               required: true,
               unique: true
          },
          location: {
               type: String,
               required: true
          },
          cuisine: {
               type: String,
               required: true
          },
     },
     {timestamps: true}
);

// Indexing...
resSchema.index({location: 1})
resSchema.index({cuisine: 1})


export default mongoose.model('Restaurant', resSchema);
