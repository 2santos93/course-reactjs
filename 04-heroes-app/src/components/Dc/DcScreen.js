import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroList } from '../Heroes/HeroList'

export const DcScreen = () => {
  return (
    <>
      <HeroList 
        heroes={getHeroesByPublisher('DC Comics')}
      />
    </>
  )
}
