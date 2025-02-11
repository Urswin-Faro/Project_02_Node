import { pool } from '../config/config.js';

const getLeaveRequests = async () => {
    try {
        const [data] = await pool.query('SELECT * FROM leave_requests');
        return data;
    } catch (error) {
        console.error("Error fetching leave requests:", error);
        throw error;
    }
};

const getSingleLeaveRequest = async (id) => {
    try {
        const [data] = await pool.query('SELECT * FROM leave_requests WHERE id = ?', [id]);
        return data.length ? data[0] : null;
    } catch (error) {
        console.error(`Error fetching leave request with ID ${id}:`, error);
        throw error;
    }
};

const addNewLeaveRequest = async (employee_id, date, reason, status) => {
    try {
        const [result] = await pool.query(
            'INSERT INTO leave_requests (employee_id, date, reason, status) VALUES (?, ?, ?, ?)', 
            [employee_id, date, reason, status]
        );

        if (result.affectedRows === 0) {
            throw new Error("Failed to add leave request.");
        }

        // Fetch and return the newly added request
        const [newRequest] = await pool.query('SELECT * FROM leave_requests WHERE id = LAST_INSERT_ID()');
        return newRequest[0];
    } catch (error) {
        console.error("Error adding new leave request:", error);
        throw error;
    }
};

const updateLeaveRequest = async (employee_id, date, reason, status) => {
    try {
        const [result] = await pool.query(
            'UPDATE leave_requests SET date = ?, reason = ?, status = ? WHERE id = ?',
            [date, reason, status, employee_id]
        );

        if (result.affectedRows === 0) {
            return null; // No rows updated means the ID doesn't exist
        }
        return await getSingleLeaveRequest(id);
    } catch (error) {
        console.error(`Error updating leave request with ID ${id}:`, error);
        throw error;
    }
};

const deleteLeaveRequest = async (id) => {
    try {
        const leaveRequest = await getSingleLeaveRequest(id);
        if (!leaveRequest) return null; // Return null if leave request doesn't exist

        const [result] = await pool.query('DELETE FROM leave_requests WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return null;
        }
        return leaveRequest; // Return the deleted request details
    } catch (error) {
        console.error(`Error deleting leave request with ID ${id}:`, error);
        throw error;
    }
};

export { getLeaveRequests, getSingleLeaveRequest, addNewLeaveRequest, updateLeaveRequest, deleteLeaveRequest };
