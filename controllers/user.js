const userService = require("../services/user");

async function getUsers(req, res) {
    try {
        const users = await userService.getUsers();
        res.json({ users: users });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = {getUsers};