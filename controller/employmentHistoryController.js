import{getEmploymentHistory, insertEmploymentHistory, updateEmploymentHistory,deleteEmploymentHistory}from '../model/employmentHistoryModel.js';

const getEmploymentHistoryCon = async(req,res)=>{
    res.json({Employment_History:await getEmploymentHistory()})
}
const insertEmploymentHistoryCon = async(req,res)=>{
    let { employment_id,employee_id,details} = req.body
    res.json({Employment_History:await insertEmploymentHistory(employment_id,employee_id,details)})
}
const deleteEmploymentHistoryCon = async(req,res)=>{
    res.json({Employment_History:deleteEmploymentHistory(req.params.id)})
}
const updateEmploymentHistoryCon = async(req,res)=>{
    let {employment_id,employee_id,details} = req.body
    res.json({Employment_History:await updateEmploymentHistory(employment_id,employee_id,details)})
}

export {getEmploymentHistoryCon, insertEmploymentHistoryCon, deleteEmploymentHistoryCon,updateEmploymentHistoryCon}