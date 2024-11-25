const clinicService = require("../services/get_clinics");

async function getClinics(req, res) {
    try {
        const clinics = await clinicService.getClinics();
        res.json({ clinics: clinics });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = {getClinics};