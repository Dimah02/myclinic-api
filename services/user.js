const User = require("../models/UserModel");

async function getUsers(){
    const users = await User.find({}).select('-password');
    return users;
}

module.exports = {
    getUsers
};