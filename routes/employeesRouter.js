import express from 'express'
import {getEmployeeCon, getSingleEmployeeCon, addNewEmployeeCon, updateEmployeeCon, deleteEmployeeCon} from '../controller/employeesController.js'

const router = express.Router();

router.get('/employees', getEmployeeCon)
router.get('/employees/:id', getSingleEmployeeCon)
router.post('/addEmployees', addNewEmployeeCon)
router.put('/updateEmployees/:id', updateEmployeeCon)
router.delete('/deleteEmployees/:id', deleteEmployeeCon)

export default router