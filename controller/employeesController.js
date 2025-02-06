import { 
    getEmployees, 
    getSingleEmployee, 
    addNewEmployee, 
    updateEmployee, 
    deleteEmployee 
} from '../model/employeesModel.js';

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
        let { employee_id, name, department_id, position_id, email } = req.body;
        if (!employee_id || !name || !department_id || !position_id || !email) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        const employees = await addNewEmployee(employee_id, name, department_id, position_id, email);
        res.json({ employees });
    } catch (error) {
        res.status(500).json({ error: "Error adding new employee", details: error.message });
    }
};

const updateEmployeeCon = async (req, res) => {
    try {
        const employee_id = parseInt(req.params.employee_id);  // Get ID from params
        const { email, name, position_id, department_id } = req.body;  // Get fields from request body

        if (!employee_id) {
            return res.status(400).json({ error: "Missing employee ID" });
        }

        const updatedEmployee = await updateEmployee(employee_id, { email, name, position_id, department_id });

        if (!updatedEmployee) {
            return res.status(404).json({ error: "Employee not found" });
        }

        res.json({ updatedEmployee });
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
