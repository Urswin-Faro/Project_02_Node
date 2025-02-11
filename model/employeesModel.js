import { pool } from '../config/config.js';

const getEmployees = async () => {
    let [data] = await pool.query('SELECT * FROM employees');
    return data;
};

const getSingleEmployee = async (id) => {
    let [data] = await pool.query('SELECT * FROM employees WHERE employee_id = ?', [id]);
    return data;
};

const addNewEmployee = async (employee_id, name, department, position,salary,employment_history, email) => {
    let [data] = await pool.query(
        'INSERT INTO employees (employee_id, name, department, position,salary,employment_history, contact) VALUES (?, ?, ?, ?, ?, ?, ?)', 
        [employee_id, name, department, position,salary,employment_history, email]
    );
    return await getEmployees();
};


const updateEmployee = async (employee_id, updateFields) => {
    const fields = Object.keys(updateFields).filter(key => updateFields[key] !== undefined && updateFields[key] !== null);
    
    if (fields.length === 0) return await getEmployees(); // If no valid fields, just return the list of employees

    const setClause = fields.map(key => `${key} = ?`).join(', ');
    const values = fields.map(key => updateFields[key]);

    const updateQuery = `UPDATE employees SET ${setClause} WHERE employee_id = ?`;
    values.push(employee_id); // Add employee_id at the end

    await pool.query(updateQuery, values);
    return await getEmployees(); // Return the updated list of employees
};


const deleteEmployee = async (id) => {
    await pool.query('DELETE FROM employees WHERE employee_id = ?', [id]);
    return await getEmployees();
};

export { getEmployees, getSingleEmployee, addNewEmployee, updateEmployee, deleteEmployee };
