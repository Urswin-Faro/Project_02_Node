import {getLeaveRequests, getSingleLeaveRequest, addNewLeaveRequest, updateLeaveRequest}from '../model/leaveRequestsModel.js'

const getLeaveRequestsCon = async (req, res) => {
    res.json({leaveRequests: await getLeaveRequests()});
};

const getSingleLeaveRequestCon = async (req, res) => {
    res.json({leaveRequest: await getSingleLeaveRequest(req.params.id)});
};

const addNewLeaveRequestCon = async (req, res) => {
    res.json({message: await addNewLeaveRequest(req.body.id, req.body.name, req.body.position, req.body.department, req.body.salary, req.body.employmenthistory, req.body.contact)});
};

const updateLeaveRequestCon = async (req, res) => {
    res.json({message: await updateLeaveRequest()});
};
const deleteLeaveRequestCon = async (req, res) => {
    res.json({message: await deleteLeaveRequest(req.params.id)});
};

export {getLeaveRequestsCon, getSingleLeaveRequestCon, addNewLeaveRequestCon, updateLeaveRequestCon, deleteLeaveRequestCon};
