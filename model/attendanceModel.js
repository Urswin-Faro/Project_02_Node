import {pool} from '../config/config.js'

// const db = require('../config/db');
const getAttendance = async () => {
    let [data] = await pool.query('SELECT * FROM attendance')
    return data

    //     db.query('SELECT * FROM attendance WHERE employee_id = ?', [employeeId], callback);
};

// ASK MATTHEW
const createAttendance = async (employee_id, date, status) => {
    await pool.query(
      'INSERT INTO attendance (employee_id, date, status) VALUES (?, ?, ?)', 
      [employee_id, date, status]
    );
  };
  

//   ASK MATTHEW
   
    // const { employee_id, date, status } = data;
    // const query = 'INSERT INTO attendance (employee_id, date, status) VALUES (?, ?, ?)';
    // db.query(query, [employee_id, date, status], callback);
// }
const updateAttendance = async (employee_id, date, status) => {
    await pool.query('UPDATE `moderntech_db`.`attendance` SET `status` = ? WHERE `employee_id` = ?', [status, employee_id]);
    return await getAttendance;
    // const query = 'UPDATE attendance SET status = ? WHERE attendance_id = ?';
    // db.query(query, [status, id], callback);
};
const deleteAttendance = async (id) => {
    let [data] = await pool.query('DELETE FROM attendance WHERE employee_id = ?', [id]);
    return data;
    // const query = 'DELETE FROM attendance WHERE attendance_id = ?';
    // db.query(query, [id], callback);
};
export {getAttendance,createAttendance,updateAttendance,deleteAttendance};