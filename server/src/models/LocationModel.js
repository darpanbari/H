import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});

export default mongoose.model("Location", locationSchema);
