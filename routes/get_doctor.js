const express = require('express');

const {get_doctor} = require("../controllers/get_doctor");
const authMiddlwere = require("../utils/authMiddleware");


const router = express.Router()

router.get('/doctors/:id', authMiddlwere.authenticateToken,get_doctor);

module.exports = router;