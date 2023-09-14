import React from 'react'
import '../stylesPages/HomePage.css'
import Description from '../components/Description'
import Etape from '../components/Etape'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div>
    <Description className='description'/>
    <Etape className='etape'/>
    <Footer className='footer' />
    </div>
  )
}
