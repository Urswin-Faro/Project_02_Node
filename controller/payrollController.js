import{getPayroll, insertPayroll, updatePayroll,deletePayrolls} from '../model/payrollModel.js'

const getPayrollCon = async (req, res) => {
    try {
        const payroll = await getPayroll();
        res.json({ payroll });
    } catch (error) {
        res.status(500).json({ error: "Error fetching payroll", details: error.message });
    }
};
const postPayrollCon = async(req,res)=>{
    let {payroll_id, employee_id,hours_worked,leave_deductions,final_salary} = req.body
    res.json({payroll:await insertPayroll(payroll_id, employee_id,hours_worked,leave_deductions,final_salary)})
}
const deletePayrollCon = async(req,res)=>{
    res.json({payroll: await deletePayrolls (req.params.id)})
}
const editPayrollCon = async(req,res)=>{
    let {payroll_id, employee_id,hours_worked,leave_deductions,final_salary} = req.body
    res.json({payroll:await updatePayroll(payroll_id, employee_id,hours_worked,leave_deductions,final_salary)})
}
export {getPayrollCon, postPayrollCon, deletePayrollCon,editPayrollCon}