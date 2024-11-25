const express = require('express');
const authMiddlwere = require("../utils/authMiddleware");
const {getUsers} = require("../controllers/user");
const {createUser} = require("../controllers/signup");
const {login} = require("../controllers/login");
const {find_user} = require("../controllers/find_user");
const {updateUserInfo} = require("../controllers/update_info");



const router = express.Router()

router.get('/users', authMiddlwere.authenticateToken,getUsers);
router.post('/find_user',authMiddlwere.authenticateToken, find_user);
router.post('/update_info',authMiddlwere.authenticateToken, updateUserInfo);
router.post('/signup', createUser);
router.post('/login', login);


module.exports = router;