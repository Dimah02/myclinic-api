const User = require("../models/UserModel");

const bcrypt = require("bcryptjs");

const { generateToken } = require("../utils/jwtUtils");


async function createUser(userData) {
    try {
        const { name, email, password, blood_type, gender, birth_date, allergy_to_medications, medical_history, height, weight } = userData;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error("User already exists");
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            blood_type,
            gender,
            birth_date,
            allergy_to_medications,
            medical_history,
            height,
            weight
        });
        const savedUser = await newUser.save();
        const token = generateToken(savedUser);
        return {
            id: savedUser._id,
            name:savedUser.name,
            email:savedUser.email,
            blood_type: savedUser.blood_type,
            gender: savedUser.gender,
            birth_date: savedUser.birth_date,
            allergy_to_medications: savedUser.allergy_to_medications,
            medical_history: savedUser.medical_history,
            height: savedUser.height,
            weight: savedUser.weight,
            token
        };
    }
    catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { createUser };