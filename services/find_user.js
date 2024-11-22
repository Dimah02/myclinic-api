const User = require("../models/UserModel");

const bcrypt = require("bcryptjs");



async function findUser(email) {
    try {
        const existingUser = await User.findOne({ email });
       if(existingUser){
        return existingUser;
       }
       else{
        return {error: "User not found"};
       }
    }
    catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { findUser };