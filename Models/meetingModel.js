
const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  title: { type: String, required: true },           
  lessonDate: { type: String, required: true },     
  startHour: { type: String, required: true },       
  endHour: { type: String, required: true },         
  teacherId: { type: String, required: true },       
  description: { type: String, required: true },     
  homeWork: { type: String, required: false },       
  homeWorkFile: { type: String, required: false },   
  videoFiles: { type: [String], required: false }, 
  code: { type: String, required: true },  
});

const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;
