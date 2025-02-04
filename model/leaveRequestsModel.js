import {pool} from '../config/config.js'

const getLeaveRequests = async (req, res) => {
    let[data] = await pool.query('SELECT * FROM leave_requests')
    return data
};

const getSingleLeaveRequest = async (id) => {
    let[data] = await pool.query('SELECT * FROM leave_requests WHERE id = ?', [id])
    return data
};

const addNewLeaveRequest = async (employee_id, name, position, department,salary, employmenthistory, contact ) => {
    let [data] = await pool.query('INSERT INTO leave_requests VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [employee_id, name, department, position, salary, employmenthistory, contact])
    return await getLeaveRequests()
 
}
 const updateLeaveRequest = async () => {
     await pool.query (
    'UPDATE `moderntech_db`.`leave_requests` SET `date` = ?, `reason` = ?, `status` WHERE id = ?',
     )
     return await getLeaveRequests()
 }
 const deleteLeaveRequest = async () => {
    await pool.query('DELETE FROM `moderntech_db` .`leave_requests` WHERE id = ?', [id]
    );
    return await getLeaveRequests()
}

 export {getLeaveRequests, getSingleLeaveRequest, addNewLeaveRequest, updateLeaveRequest, deleteLeaveRequest}