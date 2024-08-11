const { db } = require("../db/mysqldb.js");

const getCourseSchedules = async () => {
  let sql = "SELECT * FROM courseschedule";
  let result = await db.query(sql);
  return result[0];
};

const getCourseScheduleById = async (id) => {
  let sql = "SELECT * FROM courseschedule WHERE id = ?";
  let result = await db.query(sql, [id]);
  return result[0][0];
};

const addCourseSchedule = async (courseScheduleData) => {
  const { id, startDate, endDate, isPublished } = courseScheduleData;
  let sql =
    "INSERT INTO courseschedule (id, startDate, endDate, isPublished) VALUES (?, ?, ?, ?)";
  let result = await db.query(sql, [id, startDate, endDate, isPublished]);
  return result[0].insertId;
};

module.exports = {
  getCourseSchedules,
  getCourseScheduleById,
  addCourseSchedule,
};
