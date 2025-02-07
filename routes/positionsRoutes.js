import express from "express"
import {getPositionCon, insertPositionCon, deletePositionCon,updatePositionCon} from '../controller/positionsController.js'

// manages paths from different file as I cant use app.get/app.post...cant use const app = express()
const router = express.Router()


router.get('/', getPositionCon)
router.post('/', insertPositionCon)
router.delete('/', deletePositionCon)
router.patch('/',updatePositionCon)

// allows to be used outside of file
export default router