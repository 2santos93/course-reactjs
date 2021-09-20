import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroList } from '../Heroes/HeroList'

export const MarvelScreen = () => {
  return (
    <>
      <HeroList 
        heroes={getHeroesByPublisher('Marvel Comics')}
      />
    </>
  )
}
