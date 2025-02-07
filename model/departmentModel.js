import {pool} from "../config/config.js";

const getDepartment = async () => {
     let [data] =await pool.query('SELECT * FROM department ');
     return data;
};
const insertDepartment = async ( department_id,department_name) => {
    await pool.query ("INSERT INTO department ('department_id','department_name') VALUES (?, ?, )",[department_id,department_name])
return await getDepartment();
};

const updateDepartment = async (department_id,department_name) => {
    await pool.query ("UPDATE INTO department ('department_id','department_name') VALUES ( ?, ?)",[department_id,department_name])
return await getDepartment();
};

const deleteDepartment = async (id) => {
    await pool.query ('DELETE FROM [department] WHERE department_id = ?',  [id]);
return await getDepartment()
};
export {getDepartment, insertDepartment, updateDepartment,deleteDepartment};