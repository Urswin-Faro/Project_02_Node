import {getEmployees, getSingleEmployee, addNewEmployee, updateEmployee, deleteEmployee} from '../model/employeesModel.js'

const getEmployeeCon = async (req, res) => {
    res.json({employees: await getEmployees()});
};

const getSingleEmployeeCon = async (req, res) => {
    res.json({employee: await getSingleEmployee(req.params.id)});
};

const addNewEmployeeCon = async (req, res) => {
    res.json({message: await addNewEmployee(req.body.id, req.body.name, req.body.department, req.body.position, req.body.salary, req.body.employmenthistory, req.body.contact)});
};

const updateEmployeeCon = async (req, res) => {
    res.json({message: await updateEmployee(req.body.id, req.body.name, req.body.department, req.body.position, req.body.salary, req.body.employmenthistory, req.body.contact)});
};
const deleteEmployeeCon = async (req, res) => {
    res.json({message: await deleteEmployee(req.params.id)});
};

export {getEmployeeCon, getSingleEmployeeCon, addNewEmployeeCon, updateEmployeeCon, deleteEmployeeCon}