const User = require("../models/userModel");

async function getUsers(){
    const users = await User.find({}).select('-password');
    return users;
}

module.exports = {
    getUsers
};