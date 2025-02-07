import{getDepartment, insertDepartment, updateDepartment,deleteDepartment}from '../model/departmentModel.js';

const getDepartmentCon = async(req,res)=>{
    res.json({Department:await getDepartment()})
}
const postDepartmentCon = async(req,res)=>{
    let { department_id,department_name} = req.body
    res.json({Department:await insertDepartment(department_id,department_name)})
}
const deleteDepartmentCon = async(req,res)=>{
    res.json({Department:deleteDepartment(req.params.id)})
}
const editDepartmentCon = async(req,res)=>{
    let {department_id,department_name} = req.body
    res.json({Department:await updateDepartment(department_id,department_name )})
}

export {getDepartmentCon, postDepartmentCon, deleteDepartmentCon,editDepartmentCon}