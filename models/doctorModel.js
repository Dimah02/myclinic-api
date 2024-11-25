const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        trim: true,
    },
    photo: {
        type: String,
    },
    reviews: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
            userName: String,
            rating: {
                type: Number,
                min: 1,
                max: 5,
                required: true,
            },
            comment: String,
            date: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    averageRating: {
        type: Number,
        default: 0,
    },
    appointments: [
        {
            date: {
                type: Date,
                required: true,
            },
            time: [
                {
                    start: {
                        type: String,
                        required: true,
                    },
                    end: {
                        type: String,
                        required: true,
                    },
                    available: {
                        type: Boolean,
                        default: true,
                    },
                },
            ],
        },
    ],
});

DoctorSchema.pre('save', function (next) {
    if (this.reviews.length > 0) {
        const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0);
        this.averageRating = totalRating / this.reviews.length;
    } else {
        this.averageRating = 0;
    }
    next();
});

module.exports = mongoose.model('Doctor', DoctorSchema);
