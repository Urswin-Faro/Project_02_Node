import { pool } from '../config/config.js';

// Add a review for an employee
const addReview = async (employee_id, work_quality, attendance, coments) => {
    try {
        // Insert the review into the database
        await pool.query(
            'INSERT INTO review (employee_id, work_quality, attendance, coments) VALUES (?, ?, ?, ?)',
            [employee_id, work_quality, attendance, coments]
        );

        // Fetch and return the latest review for the employee (just inserted review)
        const [rows] = await pool.query(
            'SELECT * FROM review WHERE employee_id = ? ORDER BY employee_id DESC LIMIT 1',
            [employee_id]
        );
        return rows[0]; // Return the most recent review
    } catch (error) {
        throw new Error(`Error adding review: ${error.message}`);
    }
};

const getReview = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM review');
        return rows;
    } catch (error) {
        throw new Error(`Error fetching review: ${error.message}`);
    }
};

export { addReview, getReview };
