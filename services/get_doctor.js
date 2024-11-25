const Doctor = require("../models/doctorModel");



async function getDoctor(id) {
    try {
        const doctor = await Doctor.findOne({ "_id": id });
        if (doctor) {
            return doctor;
        }
        throw new Error('Doctor not found');
    }
    catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { getDoctor };