import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <div className='logo-slimO'>
        <Link to='/'>SlimOclock</Link>
        <p>Chill out yout time</p>
      </div>
      <div className='links'>
      
      <Link to='/'><button>Home</button></Link>
      <Link to='/doctor-register'><button>Register</button></Link>
      <Link to='/doctor-login'><button>Login</button></Link>
      <Link to='/doctor-dashboard'><button>Dashboard</button></Link>
      </div>
    </nav>
  )
}
