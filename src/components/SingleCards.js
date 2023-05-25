import React from 'react';
import "./SingleCards.css";

export default function SingleCards({ card, handleChoice, flipped, disabled }) {

  const handleClick = () => {
    if (!disabled) {
     handleChoice(card) 
    } 
  }  

  return (
      <div className='card'>
              <div className={flipped ? "flipped" : ""}>
                <img className='front' src={card.src} alt="card front"/>
                <img className='back' src='/img/cover.jpeg' onClick={handleClick} alt="card back" />
              </div>
            </div>
  )
}


