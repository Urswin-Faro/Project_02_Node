import { 
    getEmployees, getSingleEmployee, addNewEmployee, updateEmployee, deleteEmployee } from '../model/employeesModel.js';

const getEmployeeCon = async (req, res) => {
    try {
        const employees = await getEmployees();
        res.json({ employees });
    } catch (error) {
        res.status(500).json({ error: "Error fetching employees", details: error.message });
    }
};

const getSingleEmployeeCon = async (req, res) => {
    try {
        const employee_id = parseInt(req.params.employee_id); // Convert to integer if needed
        const employee = await getSingleEmployee(employee_id);
        if (employee.length === 0) {
            return res.status(404).json({ error: "Employee not found" });
        }
        res.json({ employee });
    } catch (error) {
        res.status(500).json({ error: "Error fetching employee", details: error.message });
    }
};

const addNewEmployeeCon = async (req, res) => {
    try {
        console.log(req.body);
        console.log('hoya Chupapi');
        let {  employee_id,name, department, position,salary,employment_history, email} = req.body;
        res.json({ employee: await addNewEmployee(employee_id,name, department, position,salary,employment_history, email) });
    } catch (error) {
        res.status(500).json({ error: "Error adding employee", details: error.message });
    }
};

const updateEmployeeCon = async (req, res) => {
    try {
        const employee_id = parseInt(req.params.employee_id);  // Get ID from params
        const { name, department, position,salary,employment_history, email } = req.body;  // Get fields from request body

        if (isNaN(employee_id)) {
            return res.status(400).json({ error: "Invalid employee ID" });
        }

        const employee = await updateEmployee(employee_id, { name, department, position,salary,employment_history, email });  // Update employee
        res.json({ employee });
    } catch (error) {
        res.status(500).json({ error: "Error updating employee", details: error.message });
    }
};

const deleteEmployeeCon = async (req, res) => {
    try {
        const employee_id = parseInt(req.params.employee_id, 10);  // Ensure it's a valid integer
        console.log('Employee ID:', req.params.employee_id);  // Debug: Log the parameter

        if (isNaN(employee_id)) {
            return res.status(400).json({ error: "Invalid employee ID" });
        }
        
        const employees = await deleteEmployee(employee_id);
        res.json({ employees });
    } catch (error) {
        console.error('Error:', error);  // Debug: Log the full error
        res.status(500).json({ error: "Error deleting employee", details: error.message });
    }
};



export { getEmployeeCon, getSingleEmployeeCon, addNewEmployeeCon, updateEmployeeCon, deleteEmployeeCon, };
