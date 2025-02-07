import{getPosition, insertPosition, updatePosition,deletePosition}from '../model/positionsModel.js';

const getPositionCon = async(req,res)=>{
    res.json({Position:await getPosition()})
}
const insertPositionCon = async(req,res)=>{
    let {position_id, position_name, salary} = req.body
    res.json({Position:await insertPosition(position_id, position_name, salary)})
}
const deletePositionCon = async(req,res)=>{
    res.json({Position:deletePosition(req.params.id)})
}
const updatePositionCon = async(req,res)=>{
    let {position_id, position_name, salary} = req.body
    res.json({Position:await updatePosition(position_id, position_name, salary)})
}

export {getPositionCon, insertPositionCon, deletePositionCon,updatePositionCon}