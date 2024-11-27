const express = require('express');
const authMiddlwere = require("../utils/authMiddleware");

const {cancelAppointment,createAppointment,getAppointment, getAllAppointment} = require("../controllers/appointment");

const router = express.Router()

router.post('/appointments',authMiddlwere.authenticateToken, createAppointment);
router.post('/appointments/:id/cancel',authMiddlwere.authenticateToken, cancelAppointment);
router.post('/users/:id/appointments',authMiddlwere.authenticateToken, getAppointment);
router.post('/users/:id/allappointments',authMiddlwere.authenticateToken, getAllAppointment);




module.exports = router;