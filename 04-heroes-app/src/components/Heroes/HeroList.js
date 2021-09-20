import React from 'react'
import { HeroCard } from './HeroCard';

export const HeroList = ({heroes}) => {
  return (
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
      {
        heroes.map((hero) => (
          <HeroCard 
            key={hero.id}
            {...hero}
          />
        ))
      }
    </div>
  )
}
