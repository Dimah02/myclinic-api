const express = require('express');

const {make_review,cancel_review} = require("../controllers/review");
const authMiddlwere = require("../utils/authMiddleware");


const router = express.Router()

router.post('/doctors/:id/reviews', authMiddlwere.authenticateToken,make_review);
router.delete('/doctors/:id/reviews/:reviewId', authMiddlwere.authenticateToken,cancel_review);


module.exports = router;