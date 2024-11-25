const User = require("../models/userModel");

const bcrypt = require("bcryptjs");

const { generateToken } = require("../utils/jwtUtils");


async function createUser(userData) {
    try {
        const {email,password,name} = userData;
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
        });
        const savedUser = await newUser.save();
        const token = generateToken(savedUser);
        return {
            id: savedUser._id,
            name:savedUser.name,
            email:savedUser.email,
            token
        };
    }
    catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { createUser };