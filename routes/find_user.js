const express = require('express');

const {find_user} = require("../controllers/find_user");

const router = express.Router()

router.post('/find_user', find_user);

module.exports = router;