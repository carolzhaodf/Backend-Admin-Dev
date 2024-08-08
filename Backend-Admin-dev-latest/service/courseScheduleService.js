const { db } = require("../db/mysqldb.js");

const getCourseSchedules = async () => {
  let sql = "SELECT * FROM courseschedule";
  let result = await db.query(sql);
  return result[0];
};

const getCourseScheduleById = async (id) => {
  let sql = "SELECT * FROM course_schedule WHERE id = ?";
  let result = await db.query(sql, [id]);
  return result[0][0];
};

module.exports = {
  getCourseSchedules,
  getCourseScheduleById,
};
