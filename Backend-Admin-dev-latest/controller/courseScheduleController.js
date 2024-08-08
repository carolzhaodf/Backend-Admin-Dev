const express = require("express");
const router = express.Router();
const courseScheduleService = require("../service/courseScheduleService");

const getCourseSchedulesAsync = async (req, res) => {
  try {
    const courseSchedules = await courseScheduleService.getCourseSchedules();
    res.status(200).json({
      success: true,
      data: courseSchedules,
    });
  } catch (error) {
    console.error("Error fetching course schedules:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch course schedules",
    });
  }
};

const getCourseScheduleByIdAsync = async (req, res) => {
  const { id } = req.params;
  try {
    const courseSchedule = await courseScheduleService.getCourseScheduleById(
      id
    );
    if (courseSchedule) {
      res.status(200).json({
        success: true,
        data: courseSchedule,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Course schedule not found",
      });
    }
  } catch (error) {
    console.error("Error fetching course schedule by ID:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch course schedule",
    });
  }
};

module.exports = {
  getCourseSchedulesAsync,
  getCourseScheduleByIdAsync,
};
