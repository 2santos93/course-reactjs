import { types } from "../../Types/types"

describe('Types test', () => {
  test('should types are equal', () => {
    expect(types).toEqual({
      login: 'Login',
      logout: 'Logout',
    
      setUIError: '[UI] Set Error',
      removeUIError: '[UI] Remove Error',
      startLoading: '[UI] Start Loading',
      finishLoading: '[UI] Finish Loading',
    
      addNote: '[Notes] Add Note',
      activeNote: '[Notes] Active Note',
      setNotes: '[Notes] Set Notes',
      refreshNote: '[Notes] Refresh Note',
      uploadFile: '[Notes] Upload File',
      deleteNote: '[Notes] Delete Note',
      desactiveNote: '[Notes] Desactive Note'
    });
  })
  
})
