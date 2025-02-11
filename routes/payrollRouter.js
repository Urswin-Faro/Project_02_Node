import express from "express"
import {getPayrollCon, postPayrollCon, deletePayrollCon,editPayrollCon} from '../controller/payrollController.js'
// manages paths from different file as I cant use app.get/app.post...cant use const app = express()
const router = express.Router()
router.get('/payroll', getPayrollCon)
router.post('/', postPayrollCon)
router.delete('/:id', deletePayrollCon)
router.patch('/',editPayrollCon)
// allows to be used outside of file
export default router






