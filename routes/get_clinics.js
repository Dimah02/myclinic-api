const express = require('express');
const clinicsController = require("../controllers/get_clinics");
const authMiddlwere = require("../utils/authMiddleware");

const router = express.Router()

router.get('/clinics', authMiddlwere.authenticateToken,clinicsController.getClinics);

module.exports = router;