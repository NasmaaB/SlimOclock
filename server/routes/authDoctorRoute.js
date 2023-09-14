const express = require('express');
const router = express.Router();
const cors = require('cors')
const {registerDoctor, loginDoctor} = require('../controllers/authDoctorController')
const {getProfile} = require('../controllers/authController');
const { getPatientList } = require('../controllers/patientRegisterController');
//middleware
router.use(
    cors({
        credentials:true,
        origin:'http://127.0.0.1:5173'
    })
)


router.post('/doctor-register', registerDoctor)
router.post('/doctor-login', loginDoctor )
router.get('/profile', getProfile)
router.get('/my-patients', getPatientList)

module.exports = router