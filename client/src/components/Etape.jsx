import React from 'react'
import './Etape.css'

export default function Etape() {
  return (
    <div className="etape-container">
  <div className="etape">
        <div className="etape-numero">1</div>
        <div className="etape-content">
          <h3>Je suis un médecin</h3>
          <ul>
            <li>
              <span className="etape-li-numero">1.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, non!
            </li>
            <li>
              <span className="etape-li-numero">2.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam doloremque nobis?
            </li>
            <li>
              <span className="etape-li-numero">3.</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae magnam molestiae debitis dolor reprehenderit in ex laborum rerum neque?
            </li>
            <li>
              <span className="etape-li-numero">4.</span> Lorem ipsum dolor sit.
            </li>
          </ul>
        </div>
      </div>
      <div className="etape">
        <div className="etape-numero">2</div>
        <div className="etape-content">
          <h3>Je suis un Patient</h3>
          <ul>
            <li>
              <span className="etape-li-numero">1.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, non!
            </li>
            <li>
              <span className="etape-li-numero">2.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam doloremque nobis?
            </li>
            <li>
              <span className="etape-li-numero">3.</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vitae magnam molestiae debitis dolor reprehenderit in ex laborum rerum neque?
            </li>
            <li>
              <span className="etape-li-numero">4.</span> Lorem ipsum dolor sit.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
