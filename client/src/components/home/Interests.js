import React from 'react'

const Interests = () => {
  return (
    <div className="interests-container">
       <h3 className="hobbies-title-mobile">Hobbies</h3>
      <div className="interests-grid">
        <li className="row-1"><img className="bounce"  src="/assets/icons/interests/pasta.svg" alt="Pasta"/></li>
         {/* second row */}
        <li className="row-2"><img className="shake" src="/assets/icons/interests/guitar.svg" alt="Guitar"/></li>
        <li className="row-2"><img className="shake" src="/assets/icons/interests/controller.svg" alt="Controller"/></li>
          {/* third row */}
          <li className="row-3"><img className="bounce" src="/assets/icons/interests/camping.svg" alt="Camping"/></li>
          <li className="row-3 hobbies-title">
            <h3>Hobbies</h3>
          </li>
        <li className="row-3"><img className="shake" src="/assets/icons/interests/beer.svg" alt="Beer"/></li>
          {/* fourth row */}
          <li className="row-2"><img className="shake" src="/assets/icons/interests/hiking.svg" alt="Hiking"/></li>
        <li className="row-2"><img className="bounce" src="/assets/icons/interests/movies.svg" alt="Movies"/></li>
           {/* fifth row */}
        <li className="row-1"><img className="shake" src="/assets/icons/interests/travelling.svg" alt="Travelling"/></li>
      </div>
    </div>
  )
}

export default Interests;