import express from 'express';
import { 
    getEmployeeCon, 
    getSingleEmployeeCon, 
    addNewEmployeeCon, 
    updateEmployeeCon, 
    deleteEmployeeCon 
} from '../controller/employeesController.js';

const router = express.Router();

router.get('/', getEmployeeCon);
router.get('/:employee_id', getSingleEmployeeCon);
router.post('/', addNewEmployeeCon);
router.put('/:employee_id', updateEmployeeCon);
router.delete('/:employee_id', deleteEmployeeCon);

export default router;
