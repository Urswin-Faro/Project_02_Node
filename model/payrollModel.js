import {pool} from "../config/config.js";

const getPayroll = async () => {
    try {
        let [data] = await pool.query('SELECT * FROM Payroll');
        return data;
    } catch (error) {
        console.error("Error fetching payroll data:", error);
        throw error;  // You can handle this error in the calling function
    }
};

const insertPayroll = async (payroll_id, employee_id, hours_worked, leave_deductions, final_salary) => {
    await pool.query(
    "INSERT INTO Payroll (payroll_id, employee_id, hours_worked, leave_deductions, final_salary) VALUES (?, ?, ?, ?, ?)",
        [payroll_id, employee_id, hours_worked, leave_deductions, final_salary]
    );
    return await getPayroll();
};
const updatePayroll = async (payroll_id, employee_id, hours_worked, leave_deductions, final_salary) => {
    await pool.query(
        "UPDATE Payroll SET employee_id = ?, hours_worked = ?, leave_deductions = ?, final_salary = ? WHERE payroll_id = ?",
        [payroll_id,employee_id, hours_worked, leave_deductions, final_salary ]
    );
    return await getPayroll()
};
    const deletePayrolls= async (id)=>{ await pool.query('DELETE from Payroll WHERE payroll_id =?',[id]);
    return await getPayroll()};
export {getPayroll, insertPayroll, updatePayroll,deletePayrolls}