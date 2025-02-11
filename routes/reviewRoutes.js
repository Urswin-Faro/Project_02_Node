import express from 'express'
import{addReviewCon} from '../controller/reviewcontroller.js'
const router = express.Router();

router.post('/review',addReviewCon);


export default router;
