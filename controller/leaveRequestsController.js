import { getLeaveRequests, getSingleLeaveRequest, addNewLeaveRequest, updateLeaveRequest, deleteLeaveRequest } from '../model/leaveRequestsModel.js';

const getLeaveRequestsCon = async (req, res) => {
    try {
        const leaveRequests = await getLeaveRequests();
        res.status(200).json({ leave_requests: leaveRequests });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching leave requests", details: error.message });
    }
};

const getSingleLeaveRequestCon = async (req, res) => {
    try {
        const { id } = req.params;
        const leaveRequest = await getSingleLeaveRequest(id);
        if (!leaveRequest) {
            return res.status(404).json({ error: "Leave request not found." });
        }
        res.status(200).json({ leave_request: leaveRequest });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching the leave request", details: error.message });
    }
};

const addNewLeaveRequestCon = async (req, res) => {
    try {
        const { employee_id, date, reason, status } = req.body;
        if (!employee_id || !date || !reason || !status) {
            return res.status(400).json({ error: "All fields are required." });
        }
        const newRequest = await addNewLeaveRequest(employee_id, date, reason, status);
        res.status(201).json({ leave_request: newRequest });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error adding leave request", details: error.message });
    }
};

const updateLeaveRequestCon = async (req, res) => {
    try {
        const { id } = req.params;
        const { date, reason, status } = req.body;

        if (!id) {
            return res.status(400).json({ error: "Leave request ID is required." });
        }

        const updatedRequest = await updateLeaveRequest(employee_id, date, reason, status);
        if (!updatedRequest) {
            return res.status(404).json({ error: "Leave request not found." });
        }

        res.status(200).json({ leave_request: updatedRequest });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error updating leave request", details: error.message });
    }
};

const deleteLeaveRequestCon = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRequest = await deleteLeaveRequest(id);
        if (!deletedRequest) {
            return res.status(404).json({ error: "Leave request not found." });
        }
        res.status(200).json({ message: "Leave request deleted successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error deleting leave request", details: error.message });
    }
};

export  {getLeaveRequestsCon, getSingleLeaveRequestCon, addNewLeaveRequestCon, updateLeaveRequestCon, deleteLeaveRequestCon
};
