import React from 'react'
import { JournalEntries } from './JournalEntries'

export const SideBar = () => {
  return (
    <aside className='sidebar__main'>
      <div className='sidebar__header' >
        <h1>
          <i class="far fa-address-card"></i>
          <span style={{marginLeft: "5px"}}>Nelson</span>
        </h1>
        <button>Logout</button>
      </div>
      <div className='sidebar__content'>
        <i class="fas fa-plus fa-5x"></i>
      </div>
      <JournalEntries />
    </aside>
  )
}
