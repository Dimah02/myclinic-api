const Clinic = require("../models/clinicModel");
const Doctor = require("../models/doctorModel");

async function getClinics() {
    const clinics = await Clinic.find({});
    const data = JSON.parse(JSON.stringify(clinics));
    for (let i = 0; i < clinics.length; i++) {
        for (let j = 0; j < clinics[i]["doctors"].length; j++) {
            let doctor = await Doctor.findById(clinics[i]["doctors"][j]);
            data[i]["doctors"][j] = JSON.parse(JSON.stringify(doctor));;
        }
    }
    return data;
}

module.exports = {
    getClinics
};