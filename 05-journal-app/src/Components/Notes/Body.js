import React from 'react'

export const Body = () => {
  return (
    <div className='journal__mail-content mt-5'>
      <input type="text" placeholder='Title'/>
      <textarea className='mt-5' placeholder='Content'/>
      <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"/>
    </div>
  )
}
