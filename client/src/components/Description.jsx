import React, {useState, useEffect} from 'react'
import './Description.css'

export default function Description() {

  const [currentPage, setCurrentPage] = useState(1);

  // Gestionnaire d'événements pour détecter les pressions sur les touches
  const handleKeyPress = (e) => {
    if (e.key === 'ArrowRight') {
      // Passer à la page suivante
      setCurrentPage((prevPage) => (prevPage < 3 ? prevPage + 1 : prevPage));
    } else if (e.key === 'ArrowLeft') {
      // Revenir à la page précédente
      setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    }
  };

  // Écouteurs d'événements pour les touches fléchées
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className='description-container'>
      <div className='describe'>
        {/* <h1>SlimOclock</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis maxime debitis est sunt odio, inventore voluptas! Repudiandae optio distinctio unde pariatur, recusandae alias, aliquid quia minima vitae dolor quas perspiciatis.</p> */}
         {/* <h1>SlimOclock</h1> */}
        {currentPage === 1 && (
          <div>
          <h1>SlimOclock Page 1</h1>
          <p>
            Page 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis maxime debitis est sunt odio,
            inventore voluptas! Repudiandae optio distinctio unde pariatur, recusandae alias, aliquid quia minima vitae
            dolor quas perspiciatis.
          </p>
          </div>
        )}
        {currentPage === 2 && (
          <div>
          <h1>SlimOclock Page 2</h1>
          <p>
            Page 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis maxime debitis est sunt odio,
            inventore voluptas! Repudiandae optio distinctio unde pariatur, recusandae alias, aliquid quia minima vitae
            dolor quas perspiciatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi ab repellendus, 
            natus assumenda et cumque a eum? 
            Possimus illo consequatur laboriosam in ea placeat ut tempore animi accusamus ullam!
          </p>
          </div>
        )}
        {currentPage === 3 && (
        <div>
         <h1>SlimOclock Page 3</h1>
         <p>
           Page 3: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis maxime debitis est sunt odio,
           inventore voluptas! Repudiandae optio distinctio unde pariatur, recusandae alias, aliquid quia minima vitae
           dolor quas perspiciatis.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi ab repellendus, 
           natus assumenda et cumque a eum? 
           Possimus illo consequatur laboriosam in ea placeat ut tempore animi accusamus ullam!
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quidem? In, cumque assumenda reiciendis ducimus,
          voluptatibus, fuga totam corporis quaerat eligendi est distinctio? Perspiciatis fugiat molestias necessitatibus quas accusamus dolor.
         </p>
         </div>
        )}
      </div>
    </div>
  )
}
