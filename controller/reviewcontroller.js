// controller/reviewcontroller.js
import { addReview, getReview } from '../model/reviewModel.js';

const addReviewCon = async (req, res) => {
    const { employee_id, work_quality, attendance, coments } = req.body;
    try {
        // Add review and get the newly added review for the employee
        const review = await addReview(employee_id, work_quality, attendance, coments);
        res.json({ message: 'Review added successfully', review });
    } catch (error) {
        res.status(500).json({ message: 'Error adding review', error: error.message });
    }
};
const getreviewCon = async (req, res) => {
    try {
        const review = await getReview();
        res.json({ review });
    } catch (error) {
        res.status(500).json({ error: "Error fetching review", details: error.message });
    }
};

export { addReviewCon, getreviewCon };
