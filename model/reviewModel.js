import { pool } from '../config/config.js';

// Add a review for an employee
const addReview = async (employee_id, work_quality, attendance, comment) => {
    try {
        // Insert the review into the database
        await pool.query(
            'INSERT INTO reviews (employee_id, work_quality, attendance, comment) VALUES (?, ?, ?, ?)',
            [employee_id, work_quality, attendance, comment]
        );

        // Fetch and return the latest review for the employee (just inserted review)
        const [rows] = await pool.query(
            'SELECT * FROM reviews WHERE employee_id = ? ORDER BY id DESC LIMIT 1',
            [employee_id]
        );
        return rows[0]; // Return the most recent review
    } catch (error) {
        throw new Error(`Error adding review: ${error.message}`);
    }
};



export { addReview };
