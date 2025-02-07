import express from "express"
import {getEmploymentHistoryCon, insertEmploymentHistoryCon, deleteEmploymentHistoryCon,updateEmploymentHistoryCon} from '../controller/employmentHistoryController.js'

// manages paths from different file as I cant use app.get/app.post...cant use const app = express()
const router = express.Router()


router.get('/', getEmploymentHistoryCon)
router.post('/', insertEmploymentHistoryCon)
router.delete('/', deleteEmploymentHistoryCon)
router.patch('/',updateEmploymentHistoryCon)

// allows to be used outside of file
export default router