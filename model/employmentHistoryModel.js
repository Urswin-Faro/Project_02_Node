import {pool} from "../config/config.js";

const getEmploymentHistory = async () => {
     let [data] =await pool.query('SELECT * FROM employment_history ');
     return data;
};
const insertEmploymentHistory = async (employment_id, employee_id,details) => {
    await pool.query ("INSERT INTO employment_history ('employment_id','employee_id','details') VALUES (?, ?, ?)",[employment_id,employee_id,details])

return await getEmploymentHistory();
};

const updateEmploymentHistory = async (employment_id,employee_id,details) => {
    await pool.query ("UPDATE INTO employment_history ('employment_id''employee_id','details') VALUES ( ?, ?,?)",[employment_id,employee_id,,details])
return await getEmploymentHistory();
};

const deleteEmploymentHistory = async (id) => {
    await pool.query ('DELETE FROM [employment_history] WHERE employment_id = ?',  [id]);
return await getEmploymentHistory()
};
export {getEmploymentHistory, insertEmploymentHistory, updateEmploymentHistory,deleteEmploymentHistory};