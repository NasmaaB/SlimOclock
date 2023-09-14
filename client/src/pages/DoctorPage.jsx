import { useContext, useState, useEffect } from "react"
import { UserContext } from "../../context/userContext"
import axios from 'axios'


export default function DoctorPage() {
    
    const {user} = useContext(UserContext)
  
   

    return (
    <div>
        <h1>Dashboard</h1>
        {!!user && (<h2> Hi {user.firstname}!</h2>)}
        
        <h2>My patient List</h2>
        <ul>
          {!! user &&  (user.daily_patient_list.map((patient) => 
          <li key={patient.patientId}>
            <p>{patient.patientName}</p>
          </li>
        ))}</ul>

    </div>
  )
}
