import express from 'express';
import {
    getLeaveRequestsCon,
    getSingleLeaveRequestCon,
    addNewLeaveRequestCon,
    updateLeaveRequestCon,
    deleteLeaveRequestCon
} from '../controller/leaveRequestsController.js';

const router = express.Router();
router.get('/leaveRequests', getLeaveRequestsCon);
router.get('/leaveRequests/:id', getSingleLeaveRequestCon);
router.post('/leaveRequests', addNewLeaveRequestCon);
router.put('/leaveRequests/:id', updateLeaveRequestCon);
router.delete('/leaveRequests/:id', deleteLeaveRequestCon);

export default router;
