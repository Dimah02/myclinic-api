const User = require("../models/userModel");

const bcrypt = require("bcryptjs");



async function updateInfo(userData) {
    try {
        const { id } = userData;
        const existingUser = await User.findOne({ "_id":id });
        if (!existingUser) {
            throw new Error("User Not Foundd");
        }
        if (id != existingUser._id) {
            return res.status(403).json({ error: "Unauthorized: You can only edit your own information" });
        }

        Object.entries(userData).forEach(([key, value]) => {
            if (value !== undefined) {
                existingUser[key] = value;
            }
        });

        await existingUser.save();

        return {
            id: existingUser._id,
            name: existingUser.name,
            email: existingUser.email,
            blood_type: existingUser.blood_type,
            gender: existingUser.gender,
            birth_date: existingUser.birth_date,
            allergy_to_medications: existingUser.allergy_to_medications,
            medical_history: existingUser.medical_history,
            height: existingUser.height,
            weight: existingUser.weight,
        };
    }
    catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { updateInfo };