import {getLeaveRequests, getSingleLeaveRequest, addNewLeaveRequest, updateLeaveRequest} from '../model/leaveRequestsModel.js'

const getLeaveRequestsCon = async (req, res) => {
    res.json({leave_requests: await getLeaveRequests()});
};

const getSingleLeaveRequestCon = async (req, res) => {
    res.json({leave_requests: await getSingleLeaveRequest(req.params.employee_id)});
};

const addNewLeaveRequestCon = async (req, res) => {
    console.log(req.body);
    let {employee_id, date, reason, status} = req.body
    res.json({leave_requests : await addNewLeaveRequest( employee_id, date, reason, status)});
};

const updateLeaveRequestCon = async (req, res) => {
    let {employee_id, date, reason, status} = req.body
    res.json({leave_requests: await updateLeaveRequest(employee_id, date, reason, status)});
};
const deleteLeaveRequestCon = async (req, res) => {
    res.json({leave_requests: await deleteLeaveRequest(req.params.employee_id)});
};

export {getLeaveRequestsCon, getSingleLeaveRequestCon, addNewLeaveRequestCon, updateLeaveRequestCon, deleteLeaveRequestCon};
