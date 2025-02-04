import {pool} from '../config/config.js'

const getEmployees = async (req, res) => {
   let[data] = await pool.query('SELECT * FROM employees')
   return data
};
const getSingleEmployee = async (id) => {
   let[data] = await pool.query('SELECT * FROM employees WHERE id = ?', [id])
   return data
};

const addNewEmployee = async (employee_id, name, position, department,salary, employmenthistory, contact ) => {
    let [data] = await pool.query('INSERT INTO employees VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [employee_id, name, department, position, salary, employmenthistory, contact])
    return await getEmployees()
 
}
const updateEmployee = async () => {
    await pool.query('UPDATE `moderntech_db` .`employees` SET `name` = ?, `department` = ?, `position` = ?, `salary` = ?, `employmenthistory` = ?, `contact` = ? WHERE id = ?', [product_id, name, department, position, salary, employmenthistory, contact,]
    );
    return data
}
const deleteEmployee = async () => {
    await pool.query('DELETE FROM `moderntech_db` .`employees` WHERE id = ?', [id]
    );
    return await getEmployees()
}
export {getEmployees, getSingleEmployee, addNewEmployee, updateEmployee, deleteEmployee}
