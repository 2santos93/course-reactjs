import React from 'react'
import { useSelector } from 'react-redux';

import { SideBar } from './SideBar';
import { Content } from './Content';
import { NotSelected } from './Notes/NotSelected';

export const JournalScreen = () => {

  const {active} = useSelector(state => state.notes)

  return (
    <div className='journal__main-content'>
      <SideBar />
      {
        (active)
          ? <Content />
          : <NotSelected />
      }
    </div>
  )
}
