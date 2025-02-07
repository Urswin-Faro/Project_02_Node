import {pool} from "../config/config.js";

const getLeaveRequests = async () => {
     let [data] =await pool.query('SELECT * FROM leave_requests ');
     return data;
};
const insertLeaveRequests = async (leave_id, employee_id, date, reason, status) => {
    await pool.query ("INSERT INTO leave_requests ('leave_id', 'employee_id', 'date', 'reason', 'status') VALUES (?, ?, ?,?,?)",[leave_id, employee_id, date, reason, status])

return await getLeaveRequests();
};

const updateLeaveRequests = async (leave_id, employee_id, date, reason, status) => {
    await pool.query ("UPDATE INTO leave_requests ('leave_id', 'employee_id', 'date', 'reason', 'status') VALUES ( ?, ?,?,?,?)",[leave_id, employee_id, date, reason, status])
return await getLeaveRequests();
};

const deleteLeaveRequests = async (id) => {
    await pool.query ('DELETE FROM [leave_requests] WHERE leave_id = ?',  [id]);
return await getLeaveRequests()
};
export {getLeaveRequests, insertLeaveRequests, updateLeaveRequests,deleteLeaveRequests};