import mongoose from "mongoose";

const Designation = new mongoose.Schema({
  name: { type: String },
});

export default mongoose.model("Designation", Designation);