const mongoose = require('mongoose')
const Doctor = require('../models/doctorSchema')

//récupérer la liste des docteurs
const getDoctorList = async (req, res) => {
    try{
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getPatientList = async (req, res) => {
    const {doctorId} = req.params;
    
    try{
        const doctor = await Doctor.findById(doctorId);
        const patientList = doctor.daily_patient_list;
        res.json(patientList)
        console.log(patientList[0].patientName)
    } catch (error){
        res.status(500).json({message: error.message})
    }
}

const patientRegister = async (req,res) => {
    const {doctorId} = req.params;
    const {patientId, patientName} = req.body;

    try {
        const doctor = await Doctor.findById(doctorId);
        if(!doctor){
            return res.status(404).json({message: 'Doctor not found'});
        }

       
        //créer une nouvelle entrée dans la liste des patients du médecin
        const newPatient = {
            patientId,
            patientName: patientName,
            date: new Date(),
            
        }

        doctor.daily_patient_list.push(newPatient)
        await doctor.save();

        res.status(201).json(newPatient);
    }

    catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getDoctorList,
    patientRegister,
    getPatientList
}