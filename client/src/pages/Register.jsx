import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import '../stylesPages/Register.css'

export default function Register() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    lastname:'',
    firstname:'',
    email:'',
    password:''
  })
  const registerUser = async (e) => {
    e.preventDefault(); 
    //destructurer les données
    const {lastname, firstname, email, password} = data
    try {
      const {data} = await axios.post('/doctor-register', {
        lastname, firstname, email, password
      })
      if(data.error) {
        toast.error(data.error)
      } else {
        setData({})
        toast.success('Login Successful. Welcom !')
        navigate('/doctor-login')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='register-container'>
      <form onSubmit={registerUser}>
        {/* <label>Nom : </label> */}
        <input type="text" placeholder='Enter your lastname' value={data.lastname} onChange={(e)=> setData({...data, lastname:e.target.value})}/>
        {/* <label>Prenom : </label> */}
        <input type="text" placeholder='Enter your firstname' value={data.firstname} onChange={(e)=> setData({...data, firstname:e.target.value})}/>
        {/* <label>Email : </label> */}
        <input type="email" placeholder='Enter your email' value={data.email} onChange={(e)=> setData({...data, email:e.target.value})} />
        {/* <label>Mot de Passe : </label> */}
        <input type='password' placeholder='Enter your passaword'value={data.password} onChange={(e)=> setData({...data, password:e.target.value})}></input>
        <div className='register-button'>
        <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}
