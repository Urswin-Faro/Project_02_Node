import {pool} from '../config/config.js'

const getAttendance = async () => {
    let [data] = await pool.query('SELECT * FROM attendance')
    return data
};
// ASK MATTHEW
const createAttendance = async (employee_id, date, status) => {
    await pool.query(
      'INSERT INTO attendance (employee_id, date, status) VALUES (?, ?, ?)',
      [employee_id, date, status]
    );
  };

const updateAttendance = async (employee_id, date, status) => {
    await pool.query('UPDATE `moderntech_db`.`attendance` SET `status` = ? WHERE `employee_id` = ?', [status, employee_id]);
    return await getAttendance;

};
const deleteAttendance = async (id) => {
    let [data] = await pool.query('DELETE FROM attendance WHERE employee_id = ?', [id]);
    return data;

};

const updateLeaveRequest = async (leave_id, data) => {
    const {employee_id,date, reason } = data;
    const query = 'UPDATE leaveRequests SET employee_id = ?, date = ?, reason = ? WHERE leave_id = ?';
    db.query(query, [leave_id, employee_id,date, reason], callback);
}
const getLeaveRequest = async () => {
    let [data] = await pool.query('SELECT * FROM leaveRequests')
    return data
};
 const addLeaveRequest = async (employee_id, date, reason, status) => {
    await pool.query('INSERT INTO leaveRequests (employee_id, date, reason, status) VALUES (?, ?, ?, ?)', [employee_id, date, reason, status]);
    return await getLeaveRequest();
};

export {getAttendance,createAttendance,updateAttendance,deleteAttendance,updateLeaveRequest, getLeaveRequest, addLeaveRequest};
