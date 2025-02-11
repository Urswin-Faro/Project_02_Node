// controller/reviewcontroller.js
import { addReview } from '../model/reviewModel.js';

const addReviewCon = async (req, res) => {
    const { employee_id, work_quality, attendance, comment } = req.body;
    try {
        // Add review and get the newly added review for the employee
        const review = await addReview(employee_id, work_quality, attendance, comment);
        res.json({ message: 'Review added successfully', review });
    } catch (error) {
        res.status(500).json({ message: 'Error adding review', error: error.message });
    }
};


export { addReviewCon};
