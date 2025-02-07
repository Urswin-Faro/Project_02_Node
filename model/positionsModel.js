import {pool} from "../config/config.js";

const getPosition = async () => {
     let [data] =await pool.query('SELECT * FROM position ');
     return data;
};
const insertPosition = async (position_id, position_name, salary) => {
    await pool.query ("INSERT INTO position ('position_id', 'position_name', 'salary') VALUES (?, ?, ?)",[position_id, position_name, salary])

return await getPosition();
};

const updatePosition= async (position_id, position_name, salary) => {
    await pool.query ("UPDATE INTO position ('position_id', 'position_name', 'salary') VALUES ( ?, ?,?)",[position_id, position_name, salary])
return await getPosition();
};

const deletePosition = async (id) => {
    await pool.query ('DELETE FROM [position] WHERE position_id = ?',  [id]);
return await getPosition()
};
export {getPosition, insertPosition, updatePosition,deletePosition};