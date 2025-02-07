import{getLeaveRequests, insertLeaveRequests, updateLeaveRequests,deleteLeaveRequests}from '../model/leaveRequestModel.js';

const getLeaveRequestsCon = async(req,res)=>{
    res.json({Leave_Request:await getLeaveRequests()})
}
const insertLeaveRequestsCon = async(req,res)=>{
    let {leave_id, employee_id, date, reason, status} = req.body
    res.json({Leave_Request:await insertLeaveRequests(leave_id, employee_id, date, reason, status)})
}
const deleteLeaveRequestsCon = async(req,res)=>{
    res.json({Leave_Request:deleteLeaveRequests(req.params.id)})
}
const updateLeaveRequestsCon = async(req,res)=>{
    let {leave_id, employee_id, date, reason, status} = req.body
    res.json({Leave_Request:await updateLeaveRequests(leave_id, employee_id, date, reason, status)})
}

export {getLeaveRequestsCon, insertLeaveRequestsCon, deleteLeaveRequestsCon,updateLeaveRequestsCon}