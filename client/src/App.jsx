import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import DoctorPage from './pages/DoctorPage'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext'
import HomePage from './pages/HomePage'


axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.defaults.withCredentials = true

function App() {
  return (
    <UserContextProvider>
      <Navbar/>
      <Toaster position='bottom-right' toastOptions={({duration: 2000})}/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/' element={<HomePage/>}/>
        <Route path='/doctor-register' element={<Register/>} />
        <Route path='/doctor-login' element={<Login/>} />
        <Route path='/doctor-dashboard' element={<DoctorPage/>} />
        <Route to="/about" element={<HomePage/>}/>
        <Route to="/services"element={<HomePage/>}/>
        <Route to="/contact" element={<HomePage/>}/>
      </Routes>
    </UserContextProvider>
  )
}

export default App
