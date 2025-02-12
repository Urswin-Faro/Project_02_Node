import express from 'express';
import { getAttendanceCon,createAttendanceCon,patchAttendanceCon,deleteAttendanceCon,getleaveRequestCon,updateLeaveRequestCon, addLeaveRequestCon } from '../controller/attendanceController.js';
const router = express.Router();
// const attendanceController = require('../controllers/attendanceController');
// Get all attendance by employee ID
router.get('/:id',getAttendanceCon);
// Create a new attendance record
router.post('/',createAttendanceCon);
// Update an attendance record (by ID)
router.patch('/:id',patchAttendanceCon);
// Delete an attendance record (by ID)
router.delete('/:id',deleteAttendanceCon);

// Get leave requests by employee ID
router.get('/leaveRequest/:id',getleaveRequestCon);
// Update a leave request (by ID)
router.patch('/leave/:leave_id',updateLeaveRequestCon);
// Add a leave request
router.post('/leaveRequest',addLeaveRequestCon);

export default router;






