// courseScheduleRouter.js
const express = require("express");
const router = express.Router();
const courseScheduleController = require("../controller/courseScheduleController");

// 定义路由
router.get("/", courseScheduleController.getCourseSchedulesAsync);
router.get("/:id", courseScheduleController.getCourseScheduleByIdAsync);

router.post("/", courseScheduleController.addCourseScheduleAsync);

module.exports = router;
