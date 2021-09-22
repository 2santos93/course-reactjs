import React from 'react'
import { JournalEntries } from './JournalEntries'
import { useDispatch } from 'react-redux';
import { beforeLogout } from '../../actions/auth';

export const SideBar = () => {

  const dispatch = useDispatch();
  
  const logoutHandler = (e) => {

    e.preventDefault();

    dispatch(beforeLogout());
  }

  return (
    <aside className='sidebar__main'>
      <div className='sidebar__header' >
        <h1>
          <i className="far fa-address-card"></i>
          <span style={{marginLeft: "5px"}}>Nelson</span>
        </h1>
        <button
          onClick={logoutHandler}
        >Logout</button>
      </div>
      <div className='sidebar__content'>
        <i className="fas fa-plus fa-5x"></i>
      </div>
      <JournalEntries />
    </aside>
  )
}
