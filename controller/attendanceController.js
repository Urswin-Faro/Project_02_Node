// import {getAttendance,createAttendance,updateAttendance,deleteAttendance} from '../model/attendanceModel.js'

// // const Attendance = require('../models/attendanceModel');
// const getAttendanceCon = async (req, res) => {
//     res.json({attendance : await getAttendance()});




//     // const employeeId = req.params.id;
//     // getAttendance.getAttendance(employeeId, (err, results) => {
//     //     if (err) return res.status(500).json({ message: 'Error retrieving attendance', error: err });
//     //     res.json(results);
//     // });
// };
// const createAttendanceCon = async (req, res) => {
//     let{employee_id, date, status} = req.body 
//     console.log(req.body);
//     res.json({attendance: await createAttendance(employee_id, date, status)})



//     // const attendanceData = req.body;
//     // getAttendance.createAttendance(attendanceData, (err, result) => {
//     //     if (err) return res.status(500).json({ message: 'Error creating attendance', error: err });
//     //     res.status(201).json({ message: 'Attendance created successfully', attendanceId: result.insertId });
//     // });
// };
// const patchAttendanceCon = async (req, res) => {
//     let {employee_id, date, status} = req.body
//     console.log(req.body);
    
//     res.json({attendance: await updateAttendance(employee_id, date, status)})
    
    
//     // const attendanceId = req.params.id;
//     // const status = req.body.status;
//     // attendanceId.updateAttendance(attendanceId, status, (err, result) => {
//     //     if (err) return res.status(500).json({ message: 'Error updating attendance', error: err });
//     //     if (result.affectedRows === 0) return res.status(404).json({ message: 'Attendance record not found' });
//     //     res.json({ message: 'Attendance updated successfully' });
//     // });
// };
// const deleteAttendanceCon = async (req, res) => {
//     res.json({attendance: await deleteAttendance(req.params.employee_id)

//     })
    
    
    
//     // const attendanceId = req.params.id;
//     // attendanceId.deleteAttendance(attendanceId, (err, result) => {
//     //     if (err) return res.status(500).json({ message: 'Error deleting attendance', error: err });
//     //     if (result.affectedRows === 0) return res.status(404).json({ message: 'Attendance record not found' });
//     //     res.json({ message: 'Attendance deleted successfully' });
//     // });
// };
// export {getAttendanceCon,createAttendanceCon,patchAttendanceCon,deleteAttendanceCon};


import { getAttendance, createAttendance, updateAttendance, deleteAttendance } from '../model/attendanceModel.js';

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
    const { employee_id, date, status } = req.body;
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

export { getAttendanceCon, createAttendanceCon, patchAttendanceCon, deleteAttendanceCon };
