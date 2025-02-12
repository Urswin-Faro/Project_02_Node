import { getAttendance, createAttendance, updateAttendance, deleteAttendance, getLeaveRequest, updateLeaveRequest , addLeaveRequest } from '../model/attendanceModel.js';

// Get all attendance records
const getAttendanceCon = async (req, res) => {
    try {
        const attendance = await getAttendance();
        res.json({ attendance });
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving attendance', error: err });
    }
};

// Create a new attendance record
const createAttendanceCon = async (req, res) => {
    let { employee_id, date, status } = req.body;
    date = date.split('T')[0]
    try {
        const attendance = await createAttendance(employee_id, date, status);
        res.status(201).json({ message: 'Attendance created successfully', attendance });
    } catch (err) {
        res.status(500).json({ message: 'Error creating attendance', error: err });
    }
};

// Update an existing attendance record
const patchAttendanceCon = async (req, res) => {
    const { employee_id, date, status } = req.body;
    try {
        const attendance = await updateAttendance(employee_id, date, status);
        if (attendance.affectedRows === 0) {
            return res.status(404).json({ message: 'Attendance record not found' });
        }
        res.json({ message: 'Attendance updated successfully', attendance });
    } catch (err) {
        res.status(500).json({ message: 'Error updating attendance', error: err });
    }
};

// Delete an attendance record
const deleteAttendanceCon = async (req, res) => {
    const { id } = req.params; // Use a unique identifier like `id`
    try {
        const result = await deleteAttendance(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Attendance record not found' });
        }
        res.json({ message: 'Attendance deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting attendance', error: err });
    }
};

// Get all leave requests
const getleaveRequestCon = async (req, res) => {
    try {
        const leaveRequest = await getLeaveRequest();
        res.json({ leaveRequest });
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving leave requests', error: err });
    }
};

// Update a leave request
const updateLeaveRequestCon = async (req, res) => {
    try {
        const leave_id = parseInt(req.params.leave_id);  // Get ID from params
        const { employee_id, date, reason, } = req.body;  // Get fields from request body
        
        if (isNaN(leave_id)) {
            return res.status(400).json({ error: "Invalid leave request ID" });
        }

        const leaveRequest = await updateLeaveRequest(leave_id, { 
            employee_id, date, reason 
        });  // Update leave request

        res.json({ leaveRequest });
    } catch (error) {
        res.status(500).json({ error: "Error updating leave request", details: error.message });
    }
};

// Add a new leave request
const addLeaveRequestCon = async (req, res) => {
    let { employee_id, date, reason, status } = req.body;
    date = date.split('T')[0]
    // try {
        // Add leave request and get the newly added request
        const leaveRequest = await addLeaveRequest(employee_id, date, reason, status);
        res.json({ message: 'Leave request added successfully', leaveRequest });
    // } catch (error) {
    //     res.status(500).json({ message: 'Error adding leave request', error: error.message });
    // }
};

export { getAttendanceCon, createAttendanceCon, patchAttendanceCon, deleteAttendanceCon, getleaveRequestCon, updateLeaveRequestCon, addLeaveRequestCon };
