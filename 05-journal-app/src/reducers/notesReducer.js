import { types } from "../Types/types";

const initialState = {
  notes: [],
  active: null
}

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addNote:
      return {
        ...state,
        notes: [
          ...state.notes,
          action.payload
        ]
      }

    case types.activeNote:
      return {
        ...state,
        active: {
          ...action.payload
        }
      }

    case types.setNotes:
      return {
        ...state,
        notes: [...action.payload]
      }

    case types.refreshNote:
      return {
        ...state,
        notes: state.notes.map((note) => (
          (note.id === action.payload.id)
            ? action.payload.note
            : note
        ))
      }

    case types.uploadFile:

      return {
        ...state,
        active: {
          ...state.active,
          img: action.payload.url
        }
      }

    case types.deleteNote:

      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload)
      }

    case types.desactiveNote:

    return {
      ...state,
      active: null
    }

    default:
      return state;
  }
}