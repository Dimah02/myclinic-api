const Doctor  = require("../models/doctorModel");

async function make_review(req,res){
    const { id } = req.params;
    const { userId, userName, rating, comment } = req.body;

    try {
        const doctor = await Doctor.findById(id);
        if (!doctor) return res.status(404).json({ message: 'Doctor not found' });

        doctor.reviews.push({ userId, userName, rating, comment });
        await doctor.save();
        res.status(201).json({ message: 'Review added', reviews: doctor.reviews });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
async function cancel_review(req,res){
    const { id, reviewId } = req.params;

    try {
        const doctor = await Doctor.findById(id);
        if (!doctor) return res.status(404).json({ message: 'Doctor not found' });

        doctor.reviews = doctor.reviews.filter((review) => review._id.toString() !== reviewId);
        await doctor.save();
        res.json({ message: 'Review deleted', reviews: doctor.reviews });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    make_review,
    cancel_review
}