const express = require('express');

const {updateUserInfo} = require("../controllers/update_info");

const router = express.Router()

router.post('/update_info', updateUserInfo);

module.exports = router;