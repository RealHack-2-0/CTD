const express = require('express');
const router = express.Router();

const jwtHelper = require('../config/jwtHelper');
const ctrlUser = require('../controllers/user.controller');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/getname/:email', ctrlUser.getname);
router.put('/rstpw',ctrlUser.puttoken);
router.get('/resetpassword/:token', ctrlUser.rstpw);
router.put('/savepassword',ctrlUser.savepassword);
