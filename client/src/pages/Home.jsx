import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid'

export default function Home() {

  const [doctors, setDoctors] = useState([]);
  const [patientsDoctor,setPatientDoctor] = useState([])
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [patientName, setPatientName] = useState(''); // État pour stocker le nom du patient
  const [patientId, setPatientId] = useState(''); // État pour stocker l'ID du patient
  
  const fetchDoctorList = async () => {
    try {
      const response = await axios.get('/get-doctor-list')
      setDoctors(response.data)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    // Charger la liste des médecins depuis l'API
    fetchDoctorList();
  }, []);

  const handleRegister = async () => {
    if(!selectedDoctor) {
      alert('Please select a doctor')
    }

    if(!patientName){
      alert('PLease enter your name')
    }

    try {
      //Générer un nouvel ID unique pour le patient
      const newPatientId = uuidv4();
      setPatientId(newPatientId)

      //Envoyer le nom du patient, l'ID du patient et l'ID du medecin au backend pour l'inscription 
      await axios.post(`/${selectedDoctor}/register`, {patientId: newPatientId, patientName})

      alert('Successfully registered with the selected doctor')
    } catch(error){
      console.error('Error registering with the doctor', error);
      alert('Failed to register with the doctor')
    }
  }

    const fetchPatientList = async () => {
      try {
        const response = await axios.post(`/${selectedDoctor}/list-patient`, {})
        setPatientDoctor(response.data)
      } catch (error) {
        
      }
    }

    
  
  
  return (
    <div>
    {/* <div>Home</div>
    <h3>Choisir docteur</h3> */}
    <h2>Select a Doctor and Register</h2>
    <p>Your unique patient ID: {patientId}</p>
    <input 
      type="text"
      placeholder='Enter your name' 
      value={patientName}
      onChange={(e) => setPatientName(e.target.value)} 
    />

    <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)}>
      <option value="">Select a doctor</option>
      {doctors.map((doctor) => (
        <option key={doctor._id} value={doctor._id}>{doctor.firstname}</option>
      ))}
    </select> 
    <button onClick={handleRegister}>Register with selected doctor</button>

    <h2>Voir la liste des patients d'un docteurs</h2>
    <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)}>
      <option value="">Select a doctor</option>
      {doctors.map((doctor) => (
        <option key={doctor._id} value={doctor._id}>{doctor.firstname}</option>
      ))}
    </select> 
    <button onClick={fetchPatientList}>list patient</button>
    <ul>{patientsDoctor.map((patient) => (
      <li key={patient.patientId}>
        <p>{patient.patientName}</p>
      </li>))}
    </ul>
    </div>
  )
      }
