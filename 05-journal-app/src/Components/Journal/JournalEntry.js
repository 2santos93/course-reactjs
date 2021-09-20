import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry mt-5 pointer'>
      <div className='journal__entry-img'></div>
      <div className='journal__entry-content'>
        <h4>Nuevo dia</h4>
        <p>Hola todo bien hoy sali a comer</p>
      </div>
      <div className='journal__entry-date'>
        <span>Miercoles</span>
        <h3>2</h3>
      </div>
    </div>
  )
}
