const express = require('express');
const userController = require("../controllers/user");
const authMiddlwere = require("../utils/authMiddleware");

const router = express.Router()

router.get('/users', authMiddlwere.authenticateToken,userController.getUsers);

module.exports = router;