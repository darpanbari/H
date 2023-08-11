import express from "express";
import LocationRouter from "./src/routers/LocationRouter.js"
import DepartmentRouter from "./src/routers/DepartmentRouter.js"
import DesignationRouter from "./src/routers/DesignationRouter.js"
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser"

const app = express(); 

//databse config
mongoose.connect("mongodb://localhost:27017/HaajriWeb")
  .then(() => {
    console.log("Database successfully connnected!");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

//middelwares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

//routes
app.use("/location", LocationRouter);
app.use("/department", DepartmentRouter);
app.use("/designation", DesignationRouter);


//PORT
const PORT = 3030;

//run listen
app.listen(PORT, () => {
  console.log(`Server Running port ${PORT}`);
});
