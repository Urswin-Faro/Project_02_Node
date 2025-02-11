import {pool} from "../config/config.js";
const getPayroll = async () => {
    let [data] = await pool.query('SELECT * FROM payroll');
    return data;
};
const insertPayroll = async (payroll_id, employee_id, hours_worked, leave_deductions, final_salary) => {
    await pool.query(
    "INSERT INTO payroll (payroll_id, employee_id, hours_worked, leave_deductions, final_salary) VALUES (?, ?, ?, ?, ?)",
        [payroll_id, employee_id, hours_worked, leave_deductions, final_salary]
    );
    return await getPayroll();
};
const updatePayroll = async (payroll_id, employee_id, hours_worked, leave_deductions, final_salary) => {
    await pool.query(
        "UPDATE payroll SET employee_id = ?, hours_worked = ?, leave_deductions = ?, final_salary = ? WHERE payroll_id = ?",
        [payroll_id,employee_id, hours_worked, leave_deductions, final_salary ]
    );
    return await getPayroll()
};
    const deletePayrolls= async (id)=>{ await pool.query('DELETE from payroll WHERE payroll_id =?',[id]);
    return await getPayroll()};
export {getPayroll, insertPayroll, updatePayroll,deletePayrolls}