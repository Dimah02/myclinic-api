const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Booked', 'Completed', 'Cancelled'],
        default: 'Booked',
    },
});

AppointmentSchema.index({ doctor: 1, date: 1 });

AppointmentSchema.pre('save', function (next) {
    if (this.date < Date.now()) {
       this.status = 'Completed';
    }
    next();
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
