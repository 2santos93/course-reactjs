import React from 'react'
import { SideBar } from './SideBar';
import { Content } from './Content';

export const JournalScreen = () => {
  return (
    <div className='journal__main-content'>
      <SideBar />
      <Content />
    </div>
  )
}
