const Appointment  = require("../models/appointmentModel");
const appService = require("../services/make_appointment");


async function createAppointment(req,res){
    try{
        const { doctorId, userId, date, time } = req.body;
        const appointment = await appService.makeAppointment(doctorId, userId, date, time );
        res.status(201).json({ message: 'Appointment created', appointment });
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

async function getAppointment(req,res){
    const { id } = req.params;

    try {
        const appointments = await Appointment.find({ user: id, status: 'Booked' })
            .populate('doctor', 'name specialization')
            .lean();

        res.json({ appointments });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAllAppointment(req,res){
    const { id } = req.params;

    try {
        const appointments = await Appointment.find({ user: id })
            .populate('doctor', 'name specialization')
            .lean();

        res.json({ appointments });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function cancelAppointment(req, res) {
    try {
        const { id } = req.params;
        const appointment = await Appointment.findById(id).populate('doctor');
        if (!appointment) return res.status(404).json({ message: 'Appointment not found' });

        // Update the doctor's available slots
        const doctor = appointment.doctor;
        doctor.appointments = doctor.appointments.map((appt) => {
            if (appt.date.getDate === appointment.date.getDate) {
                appt.time = appt.time.map((slot) => {
                    if (slot.start === appointment.time) slot.available = true;
                    return slot;
                });
            }
            return appt;
        });

        await doctor.save();

        // Update appointment status
        appointment.status = 'Cancelled';
        await appointment.save();

        res.json({ message: 'Appointment cancelled', appointment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createAppointment,
    cancelAppointment,
    getAppointment,
    getAllAppointment
}