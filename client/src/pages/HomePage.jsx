import React from 'react'
import '../stylesPages/HomePage.css'
import Description from '../components/Description'
import Etape from '../components/Etape'

export default function HomePage() {
  return (
    <div>
    <Description className='description'/>
    <Etape className='etape'/>
    </div>
  )
}
