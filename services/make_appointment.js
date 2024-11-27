const Appointment  = require("../models/appointmentModel");
const Doctor = require('../models/doctorModel');




async function makeAppointment(doctorId, userId, jdate, time) {
    try {
        const date = new Date(jdate);
        // date.setDate(date.getDate() + 1)
        console.log(date);

        const doctor = await Doctor.findById(doctorId);
        if (!doctor)  throw new Error('Doctor not found');

        const appointmentExists = doctor.appointments.some(
            (appt) =>
                appt.date === date &&
                appt.time.some((slot) => slot.start === time && !slot.available)
        );
        if (appointmentExists) {
            throw new Error('Time slot is not available');
        }
        doctor.appointments = doctor.appointments.map((appt) => {
            console.log("app: ",appt.date.toString());
            console.log("date:",date.toString());
            if (appt.date.getDate === date.getDate) {
                console.log("ok");
                appt.time = appt.time.map((slot) => {
                    if (slot.start === time) {
                        console.log("Found");
                        slot.available = false;
                    }
                    return slot;
                });
            }
            return appt;
        });

        await doctor.save();
        const appointment = new Appointment({
            doctor: doctorId,
            user: userId,
            date,
            time,
        });
        await appointment.save();
        return appointment;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { makeAppointment };