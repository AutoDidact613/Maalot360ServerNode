
const mymongo = require("mongoose")
const course = require("../Controllers/coursesController")


const courseSchema  = mymongo.Schema({
    id: Number,
  name: String,
  desc: String,
  teacherId: Number,
  startDate: String,
  endDate: String,
  numOfHours: Number,
  numOfHoursPerLesson: Number,
  numOfLessons: Number,
  moreInfo: String,
  sylabus: String,
  img: String,
  active: Boolean
})

const courseModel = mymongo.model("Course", courseSchema , "Course")
module.exports = courseModel;

