const bcrypt = require("bcryptjs");

const User = require("../models/userModel");

const { generateToken } = require("../utils/jwtUtils");

async function login(email, password) {
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            throw new Error("User not found");
        }
        const isValidPassword = await bcrypt.compare(password, existingUser.password);

        if (!isValidPassword) {
            throw new Error("Incorrect password");
        }
        const token = generateToken(existingUser);
        return {
            id: existingUser._id,
            name:existingUser.name,
            email:existingUser.email,
            blood_type: existingUser.blood_type,
            gender: existingUser.gender,
            birth_date: existingUser.birth_date,
            allergy_to_medications: existingUser.allergy_to_medications,
            medical_history: existingUser.medical_history,
            height: existingUser.height,
            weight: existingUser.weight,
            token
        };
    }
    catch (error) {
        throw new Error(error.message);
    }
}
module.exports = {
    login
};