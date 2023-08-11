import DepartmentModel from "../models/DepartmentModel.js";

export const addDepartment = async (req, res) => {
  try {
    const { departName } = req.body;

    const data = new DepartmentModel({ name: departName });
    const saveData = data.save();

    if (data) {
      res.status(201).json({
        success: true,
        data: data,
        message: "Department Created Successfully",
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

export const getDepartment = async (req, res) => {
    try {
    const data = await DepartmentModel.find({})
        
      if (data) {
        res.status(200).json({
          success: true,
          data: data,
          message: "Department Get Successfully",
        });
      }
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  };
  