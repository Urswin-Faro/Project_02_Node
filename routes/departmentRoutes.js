import express from "express"
import {getDepartmentCon, postDepartmentCon, deleteDepartmentCon,editDepartmentCon} from '../controller/departmentController.js'

// manages paths from different file as I cant use app.get/app.post...cant use const app = express()
const router = express.Router()


router.get('/', getDepartmentCon)
router.post('/', postDepartmentCon)
router.delete('/', deleteDepartmentCon)
router.patch('/',editDepartmentCon)

// allows to be used outside of file
export default router