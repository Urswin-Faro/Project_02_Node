import express from "express"
import {getLeaveRequestsCon, insertLeaveRequestsCon, deleteLeaveRequestsCon,updateLeaveRequestsCon} from '../controller/leaveRequestController.js'

// manages paths from different file as I cant use app.get/app.post...cant use const app = express()
const router = express.Router()


router.get('/', getLeaveRequestsCon)
router.post('/', insertLeaveRequestsCon)
router.delete('/', deleteLeaveRequestsCon)
router.patch('/',updateLeaveRequestsCon)

// allows to be used outside of file
export default router