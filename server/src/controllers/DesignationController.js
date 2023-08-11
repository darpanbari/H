import DesignationModel from "../models/DesignationModel.js";

export const addDesignation = async (req, res) => {
  try {
    const { designName } = req.body;

    const data = new DesignationModel({ name: designName });
    const saveData = data.save();

    if (data) {
      res.status(201).json({
        success: true,
        data: data,
        message: "Designation Created Successfully",
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

export const getDesignation = async (req, res) => {
    try {
    const data = await DesignationModel.find({})
        
      if (data) {
        res.status(200).json({
          success: true,
          data: data,
          message: "Designation Get Successfully",
        });
      }
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  };
  