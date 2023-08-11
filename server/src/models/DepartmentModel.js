import mongoose from "mongoose";

const Department = new mongoose.Schema({
  name: { type: String },
});

export default mongoose.model("Department", Department);