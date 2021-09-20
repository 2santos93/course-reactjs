import React from 'react'
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {
  const journalEntries = [1,2,3,4,5,6,6,6,6,6,6,6];
  return (
    <div className='journal__entries mt-5'>
      {
        journalEntries.map((journalEntry, pos) => <JournalEntry key={pos} {...journalEntry}/>)
      }
    </div>
  )
}
