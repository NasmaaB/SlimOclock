const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const cors = require('cors')
const {patientRegister, getDoctorList, getPatientList} = require('../controllers/patientRegisterController')

//middleware
router.use(
    cors({
        credentials:true,
        origin:'http://127.0.0.1:5173'
    })
)

//route permettant aux patients de s'inscrire sur la liste d'un docteur
router.post('/:doctorId/register', patientRegister)
//route permettant de récupérer la liste des docteurs
router.get('/get-doctor-list', getDoctorList)
//route permettant de récupérer la liste des patients d'un docteur
router.post('/:doctorId/list-patient', getPatientList)

module.exports = router