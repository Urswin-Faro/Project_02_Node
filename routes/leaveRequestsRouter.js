import express from 'express'
import {getLeaveRequests, getSingleLeaveRequest, addNewLeaveRequest, updateLeaveRequest, deleteLeaveRequest}from '../model/leaveRequestsModel.js'

const router = express.Router()

router.get('/leaveRequests', getLeaveRequests)
router.get('/leaveRequests/:id', getSingleLeaveRequest)
router.post('/addLeaveRequests', addNewLeaveRequest)
router.put('/updateLeaveRequests/:id', updateLeaveRequest)
router.delete('/deleteLeaveRequests/:id', deleteLeaveRequest)