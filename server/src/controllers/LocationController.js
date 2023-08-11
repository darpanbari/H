import LocationModel from "../models/LocationModel.js";

export const addLocation = async (req, res) => {
  try {
    const { type, name, city, state, latitude, longitude } = req.body;

    const data = new LocationModel({
      type,
      name,
      city,
      state,
      latitude,
      longitude,
    });
    const saveData = data.save();

    if (data) {
      res.status(201).json({
        success: true,
        data: data,
        message: "Location Created Successfully",
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

export const getLocation = async (req, res) => {
    try {
    const data = await LocationModel.find({})
        
      if (data) {
        res.status(200).json({
          success: true,
          data: data,
          message: "Location Get Successfully",
        });
      }
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  };
  